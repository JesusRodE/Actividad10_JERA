import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2ZT9MdpK88rd5YA-v6kKevoHyXo8glCw",
  authDomain: "actividad-10-70465.firebaseapp.com",
  databaseURL: "https://actividad-10-70465-default-rtdb.firebaseio.com",
  projectId: "actividad-10-70465",
  storageBucket: "actividad-10-70465.appspot.com",
  messagingSenderId: "74486115255",
  appId: "1:74486115255:web:5367e83a6a3c1d5c119632"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
