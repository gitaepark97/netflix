import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: 'netflix-ae2d0.firebaseapp.com',
  projectId: 'netflix-ae2d0',
  storageBucket: 'netflix-ae2d0.appspot.com',
  messagingSenderId: '565092776073',
  appId: '1:565092776073:web:e13cff811299344daa6e58',
}

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()

export default storage
