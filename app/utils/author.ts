import authorsData from '../data/authors.json'

export interface AuthorProfile {
  id?: string
  slug: string
  name: string
  role?: string
  fullRole?: string
  company?: string
  badgeText?: string
  bio?: string
  avatar?: string
  experience?: string
  location?: string
  specialties?: string[]
  email?: string
  linkedin?: string
}

/**
 * Find an author profile by slug or ID.
 */
export function getAuthorBySlug(slug: string): AuthorProfile | null {
  if (!slug) return null
  const normalized = String(slug).toLowerCase().trim()
  const found = authorsData.find(
    a => a.slug.toLowerCase() === normalized || a.id.toLowerCase() === normalized
  )
  return (found as AuthorProfile) || null
}

/**
 * Resolves an author object, combining any provided properties with authors.json database defaults.
 */
export function resolveAuthor(authorData: any): AuthorProfile | null {
  if (!authorData) return null

  // If authorData is a string slug
  if (typeof authorData === 'string') {
    return getAuthorBySlug(authorData) || {
      slug: authorData,
      name: authorData,
      role: 'Tax Planning Specialist',
      company: 'Tax Planning UAE',
      badgeText: 'Tax Planning\nUAE',
      bio: ''
    }
  }

  // If authorData is an object
  if (typeof authorData === 'object') {
    const slug = authorData.slug || (authorData.name ? String(authorData.name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : 'author')
    const fromDb = getAuthorBySlug(slug) || {}

    return {
      slug,
      name: authorData.name || fromDb.name || 'Author',
      role: authorData.role || fromDb.role || 'Contributor',
      fullRole: authorData.fullRole || fromDb.fullRole,
      company: authorData.company || fromDb.company || 'Tax Planning UAE',
      badgeText: authorData.badgeText || fromDb.badgeText || (authorData.company || fromDb.company || 'Tax Planning\nUAE'),
      bio: authorData.bio || fromDb.bio || '',
      avatar: authorData.avatar || fromDb.avatar,
      experience: authorData.experience || fromDb.experience,
      location: authorData.location || fromDb.location,
      specialties: authorData.specialties || fromDb.specialties || [],
      email: authorData.email || fromDb.email,
      linkedin: authorData.linkedin || fromDb.linkedin,
      ...authorData
    }
  }

  return null
}
