import firebase from 'firebase/app'

import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'

import firebaseConfig from './firebaseConfig'

// Create a connection
const firebaseApp = firebase.initializeApp(firebaseConfig)

// use connection
const database = firebaseApp.firestore()


// function login with facebook
export default {
    facebookPopUp:async () => {
        const provider = new firebase.auth.FacebookAuthProvider()
        let result = await firebaseApp.auth().signInWithPopup(provider)
        
        return result
    }
}