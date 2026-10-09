import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // body should contain: name, email, phone, service, message
  const { name, email, phone, service, message } = body
  
  if (!name || !email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name and email are required',
    })
  }
  
  // Create a transporter using SMTP transport
  // Note: For production, store these in a .env file and use process.env
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com', // e.g. for gmail
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || 'your_email@gmail.com', // your SMTP email
      pass: process.env.SMTP_PASS || 'your_app_password', // your SMTP password
    },
  })
  
  try {
    // 1. Email to the site admin
    await transporter.sendMail({
      from: `"Tax Planning Website" <${process.env.SMTP_USER || 'your_email@gmail.com'}>`,
      to: process.env.ADMIN_EMAIL || 'admin@taxplanning.ae', // Admin's email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Service Required:</strong> ${service || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'N/A'}</p>
      `,
    })

    // 2. Auto-responder Email to the user
    await transporter.sendMail({
      from: `"Tax Planning Website" <${process.env.SMTP_USER || 'your_email@gmail.com'}>`,
      to: email, // The user's email
      subject: `Thank you for contacting taxplanning.ae`,
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for getting in touch with us regarding <strong>${service || 'our services'}</strong>.</p>
        <p>We have received your inquiry and a member of our team will get back to you shortly.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>taxplanning.ae Team</strong></p>
      `,
    })
    
    return { success: true, message: 'Emails sent successfully' }
  } catch (error) {
    console.error('Email send error:', error)
    // Even if it fails (because credentials aren't set yet), we shouldn't necessarily crash the UI if we're just testing
    // But throwing error is correct REST behavior. 
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email. Check SMTP configuration.',
    })
  }
})
