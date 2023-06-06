import {initializeApp} from "firebase/app"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAqy1TM6cE0RGSx47-SBnjKNdLN6WVEibk",
  authDomain: "log-in-test-5bcb3.firebaseapp.com",
  projectId: "log-in-test-5bcb3",
  storageBucket: "log-in-test-5bcb3.appspot.com",
  messagingSenderId: "451432595374",
  appId: "1:451432595374:web:e6aeb79b0091f20a28123f",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    console.log(user.providerData)
    return 200
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    console.log(errorCode, errorMessage)
    throw new Error(errorMessage)
  }
}

export const signInWithEmailPassword = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)
    const user = result.user
    console.log(user)
    return 200
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    console.log(errorCode, errorMessage)
    throw new Error(errorMessage)
  }
}