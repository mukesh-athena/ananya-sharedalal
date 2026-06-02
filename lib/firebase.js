import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCUb8gFYHwSsD99n4uQ5bSUckXhyXWnHUE",
  authDomain: "ananya-portfolio.firebaseapp.com",
  projectId: "ananya-portfolio",
  storageBucket: "ananya-portfolio.firebasestorage.app",
  messagingSenderId: "235037349820",
  appId: "1:235037349820:web:e956a498ad125b55033db9"
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
const db = getFirestore(app)

export { db }