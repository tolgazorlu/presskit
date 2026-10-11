// Optional analytics. Nothing loads unless the IDs are set in .env (see
// .env.example), so a fork never reports its visitors to someone else's
// Clarity or Firebase project.

const env = import.meta.env

function loadClarity(id: string) {
  if (!/^[a-z0-9]+$/i.test(id)) {
    console.warn('VITE_CLARITY_ID looks invalid, Clarity not loaded')
    return
  }
  const w = window as any
  w.clarity = w.clarity || function (...args: unknown[]) {
    (w.clarity.q = w.clarity.q || []).push(args)
  }
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.clarity.ms/tag/${id}`
  document.head.appendChild(script)
}

async function loadFirebaseAnalytics() {
  const config = {
    apiKey: env.VITE_FIREBASE_API_KEY,
    authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: env.VITE_FIREBASE_APP_ID,
    measurementId: env.VITE_FIREBASE_MEASUREMENT_ID,
  }
  const base = 'https://www.gstatic.com/firebasejs/11.9.0'
  const { initializeApp } = await import(/* @vite-ignore */ `${base}/firebase-app.js`)
  const { getAnalytics } = await import(/* @vite-ignore */ `${base}/firebase-analytics.js`)
  getAnalytics(initializeApp(config))
}

export function setupAnalytics() {
  if (env.VITE_CLARITY_ID) {
    loadClarity(env.VITE_CLARITY_ID)
  }
  if (env.VITE_FIREBASE_API_KEY && env.VITE_FIREBASE_APP_ID && env.VITE_FIREBASE_MEASUREMENT_ID) {
    loadFirebaseAnalytics().catch((err) => console.warn('Firebase Analytics not loaded:', err))
  }
}
