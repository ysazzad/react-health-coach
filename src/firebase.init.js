// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsqc681XycRlM30rG1XvbsaQl-t7EjNm4",
    authDomain: "health-coach-9eab0.firebaseapp.com",
    projectId: "health-coach-9eab0",
    storageBucket: "health-coach-9eab0.appspot.com",
    messagingSenderId: "933260738464",
    appId: "1:933260738464:web:0f1eaa7a453ee696dceec5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;