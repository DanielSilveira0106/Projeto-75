import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBVJcfwSd7LQ3gkPdQTov5-Ox3fjIlyeQ0",
  authDomain: "app-biblioteca-3502c.firebaseapp.com",
  projectId: "app-biblioteca-3502c",
  storageBucket: "app-biblioteca-3502c.appspot.com",
  messagingSenderId: "928180978798",
  appId: "1:928180978798:web:bf54ff30399e5cdf0ad27f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
