function App() {
  return (
    <div>
      
    </div>
  );
}

export default App;



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs9_k_jt8xNF2rlm9by2H_JfcHWa0dTU0",
  authDomain: "greeetly.firebaseapp.com",
  projectId: "greeetly",
  storageBucket: "greeetly.firebasestorage.app",
  messagingSenderId: "675440807963",
  appId: "1:675440807963:web:a2a9a97bfba59f3426e8be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
