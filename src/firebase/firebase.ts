import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'VOTRE_API_KEY',
  authDomain: 'VOTRE_AUTH_DOMAIN',
  projectId: 'VOTRE_PROJECT_ID',
  storageBucket: 'VOTRE_STORAGE_BUCKET',
  messagingSenderId: 'VOTRE_MESSAGING_SENDER_ID',
  appId: 'VOTRE_APP_ID',
};

// Initialisez Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();