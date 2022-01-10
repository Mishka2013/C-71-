import firebase from "firebase";
require("@firebase/firestore");
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRBDXXpD25dmK_9WM7M0y52MvOhcd9oHY",
    authDomain: "e-ride-2eadf.firebaseapp.com",
    projectId: "e-ride-2eadf",
    storageBucket: "e-ride-2eadf.appspot.com",
    messagingSenderId: "65772386418",
    appId: "1:65772386418:web:f2d1ed266c07960ad9eaeb"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default firebase.firestore();