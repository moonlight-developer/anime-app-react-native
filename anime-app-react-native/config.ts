import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'

import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "secret",
    authDomain: "secret",
    projectId: "secret",
    storageBucket: "secret",
    messagingSenderId: "secret",
    appId: "secret",
    measurementId: "secret"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};