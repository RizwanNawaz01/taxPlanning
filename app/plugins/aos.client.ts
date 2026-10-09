import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    nuxtApp.hook('app:mounted', () => {
      AOS.init({
        once: true, // whether animation should happen only once - while scrolling down
        duration: 800, // values from 0 to 3000, with step 50ms
        offset: 120, // offset (in px) from the original trigger point
        easing: 'ease-out',
      })
    })
    
    // Refresh AOS on page change
    nuxtApp.hook('page:finish', () => {
      setTimeout(() => {
        AOS.refresh()
      }, 100)
    })
  }
})
