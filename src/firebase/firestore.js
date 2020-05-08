import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase
