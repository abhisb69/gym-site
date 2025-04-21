// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6LkOvh5-x_JHR_gA4MTzX8Lf9QEIfKws",
  authDomain: "gym-demo-fb88e.firebaseapp.com",
  projectId: "gym-demo-fb88e",
  storageBucket: "gym-demo-fb88e.firebasestorage.app",
  messagingSenderId: "251176429576",
  appId: "1:251176429576:web:f8828b9e188dd31c3cc9bd",
  measurementId: "G-ZRLJEFGPKD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };