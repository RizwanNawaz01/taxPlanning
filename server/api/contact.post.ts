import nodemailer from 'nodemailer'

function escapeHtml(str: string): string {
  if (!str) return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const body = await readBody(event)
  
  // Anti-Spam: Honeypot check
  if (body.website) {
    // Return fake success for bot submissions without sending emails
    return { success: true, message: 'Inquiry received' }
  }

  const { name, email, phone, service, message } = body
  
  if (!name || !email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name and email are required',
    })
  }

  // Basic email syntax validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'A valid email address is required',
    })
  }
  
  const cleanName = escapeHtml(name)
  const cleanEmail = escapeHtml(email)
  const cleanPhone = escapeHtml(phone || 'N/A')
  const cleanService = escapeHtml(service || 'General Inquiry')
  const cleanMessage = escapeHtml(message || 'No additional message provided')

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: parseInt(config.smtpPort || '465'),
    secure: parseInt(config.smtpPort || '465') === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  })
  
  try {
    // 1. Email to the site admin
    await transporter.sendMail({
      from: `"Tax Planning Website" <${config.smtpUser || 'info@taxplanning.ae'}>`,
      to: config.adminEmail,
      replyTo: cleanEmail,
      subject: `New Contact Form Submission from ${cleanName}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Phone:</strong> ${cleanPhone}</p>
        <p><strong>Service Required:</strong> ${cleanService}</p>
        <p><strong>Message:</strong></p>
        <p>${cleanMessage}</p>
      `,
    })

    // 2. Auto-responder Email to the user (only if user provided valid email and SMTP user is configured)
    if (config.smtpUser) {
      await transporter.sendMail({
        from: `"Tax Planning" <${config.smtpUser}>`,
        to: email,
        subject: `Thank you for contacting taxplanning.ae`,
        html: `
          <h2>Hi ${cleanName},</h2>
          <p>Thank you for getting in touch with us regarding <strong>${cleanService}</strong>.</p>
          <p>We have received your inquiry and a member of our team will get back to you shortly.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>taxplanning.ae Team</strong></p>
        `,
      })
    }
    
    return { success: true, message: 'Emails sent successfully' }
  } catch (error) {
    console.error('Email send error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send message. Please try again or reach out by phone.',
    })
  }
})
