/**
 * Utility to calculate dynamic reading time from blog content.
 */

/**
 * Extracts readable plain text from various content structures:
 * - Block array: [{ type: 'paragraph', text: '...' }, { type: 'heading', text: '...' }, { type: 'list', items: [...] }]
 * - String: raw text, markdown, or HTML
 * - Object: nested content or text fields
 */
export function extractTextFromContent(content: any): string {
  if (!content) return ''

  if (typeof content === 'string') {
    return content
  }

  if (Array.isArray(content)) {
    return content
      .map(block => {
        if (!block) return ''
        if (typeof block === 'string') return block
        if (typeof block === 'object') {
          const parts: string[] = []
          if (block.text) parts.push(String(block.text))
          if (Array.isArray(block.items)) parts.push(block.items.filter(Boolean).join(' '))
          if (Array.isArray(block.headers)) parts.push(block.headers.filter(Boolean).join(' '))
          if (Array.isArray(block.rows)) parts.push(block.rows.flat().filter(Boolean).join(' '))
          if (block.quote) parts.push(String(block.quote))
          if (block.content) parts.push(extractTextFromContent(block.content))
          return parts.join(' ')
        }
        return ''
      })
      .join(' ')
  }

  if (typeof content === 'object') {
    if (content.content) {
      return extractTextFromContent(content.content)
    }
    if (content.text) {
      return String(content.text)
    }
  }

  return ''
}

/**
 * Counts total words in content.
 * Handles HTML tags, whitespace, and Unicode characters.
 */
export function getWordCount(content: any): number {
  const rawText = extractTextFromContent(content)
  if (!rawText) return 0

  // Strip any HTML tags if present
  const plainText = rawText.replace(/<[^>]*>/g, ' ')

  // Split on whitespace and filter empty strings
  const words = plainText.trim().split(/\s+/).filter(Boolean)
  return words.length
}

/**
 * Calculates dynamic reading time in minutes (default 200 words per minute).
 * Ensures a minimum of 1 minute.
 */
export function getReadTimeMinutes(content: any, wordsPerMinute: number = 200): number {
  const words = getWordCount(content)
  if (words <= 0) return 1
  return Math.max(1, Math.ceil(words / wordsPerMinute))
}

/**
 * Returns formatted reading time string (e.g. "3 min read" or "1 min read").
 */
export function calculateReadTime(content: any, wordsPerMinute: number = 200): string {
  const minutes = getReadTimeMinutes(content, wordsPerMinute)
  return `${minutes} min read`
}
