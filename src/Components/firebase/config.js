import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBB8ZdOSM038XZzQI1LGpdT9019MTyVmD0",
    authDomain: "olxx-e6a5a.firebaseapp.com",
    projectId: "olxx-e6a5a",
    storageBucket: "olxx-e6a5a.appspot.com",
    messagingSenderId: "500538929292",
    appId: "1:500538929292:web:1e2acd9d66a1f166e30ba9",
    measurementId: "G-XKY46MSP1J"
  };
  export default firebase.initializeApp(firebaseConfig)
 export const auth=firebase.auth();
 export  const firestore=firebase.firestore();