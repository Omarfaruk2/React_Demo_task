// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
    appId: process.env.REACT_APP_APP_ID,



    // apiKey: AIzaSyAv0axMIkIF4KX2oi_137mv0ONTPPtlht4
    // authDomain: react-d9fec.firebaseapp.com
    // projectId: react-d9fec
    // storageBucket: react-d9fec.appspot.com
    // messagingSenderId: 603827943951
    // appId: 1:603827943951:web:28dafbdce1e4ee960e417a
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default auth
