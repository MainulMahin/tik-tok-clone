// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB5lSGqPme84VA1Jzqb9bzDrt9TEtKstBg",
    authDomain: "tik-tok-clone-10f5e.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-10f5e.firebaseio.com",
    projectId: "tik-tok-clone-10f5e",
    storageBucket: "tik-tok-clone-10f5e.appspot.com",
    messagingSenderId: "673949930524",
    appId: "1:673949930524:web:cd4b131406c3a8ea50fbd9",
    measurementId: "G-292VNSZMS9"
  };

  const firebaseApp = 
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;