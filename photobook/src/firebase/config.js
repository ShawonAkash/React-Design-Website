import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyDICqvH1YHGzCzOpUlc3ZKu4yAavgyv8o8',
  authDomain: 'photo-book-7070a.firebaseapp.com',
  projectId: 'photo-book-7070a',
  storageBucket: 'photo-book-7070a.appspot.com',
  messagingSenderId: '625354497905',
  appId: '1:625354497905:web:2907ca058573661e6420d0',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }
