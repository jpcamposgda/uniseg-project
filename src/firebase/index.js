import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA8eP7p_iJ7A9XvOdNhIRQqXi0TYtG0WUY",
    authDomain: "uniseg-project.firebaseapp.com",
    projectId: "uniseg-project",
    storageBucket: "uniseg-project.appspot.com",
    messagingSenderId: "807429118218",
    appId: "1:807429118218:web:2f9980b4d870d2b5c302f3",
    measurementId: "G-TN764W6KDJ"
  };


const app = initializeApp(firebaseConfig);



const db = getFirestore(app);

export {
    db
}