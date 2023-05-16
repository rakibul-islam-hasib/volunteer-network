// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// TODO : Use dotenv to hide firebase config
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0jNcOnTV2flU801lmdRfVBmdtqayOBCs",
  authDomain: "volunteer-network-1h.firebaseapp.com",
  projectId: "volunteer-network-1h",
  storageBucket: "volunteer-network-1h.appspot.com",
  messagingSenderId: "1082393396546",
  appId: "1:1082393396546:web:cea67637bab52511fb74db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);