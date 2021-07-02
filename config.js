import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBD-B_6i6P9yL5j8n2L33m6dZW-i6hQuBA",
  authDomain: "newsletter-6c01b.firebaseapp.com",
  databaseURL: "https://newsletter-6c01b-default-rtdb.firebaseio.com",
  projectId: "newsletter-6c01b",
  storageBucket: "newsletter-6c01b.appspot.com",
  messagingSenderId: "407878697503",
  appId: "1:407878697503:web:64443c048d4e78beb6cb2a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();