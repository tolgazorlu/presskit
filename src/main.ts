import './style.css'
import { Header } from './components/header.ts'
import { BackgroundHero } from './components/backgroundHero.ts'
import { Hero, setupMediaGallery } from './components/hero.ts'
// import { Screenshots } from './components/screenshots.ts'
// import { Logos } from './components/logos.ts'
import { Footer } from './components/footer.ts'
import { setupAnalytics } from './analytics.ts'

// ${Logos()}
// ${Screenshots()}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}
  ${BackgroundHero()}
  ${Hero()}
  ${Footer()}
`

// Initialize media gallery after DOM is rendered
setupMediaGallery()

setupAnalytics()
