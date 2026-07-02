import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNEpz-alyyWENEHuU239m5iQPLrvwh-G8",
  authDomain: "portfolioo-9502c.firebaseapp.com",
  projectId: "portfolioo-9502c",
  storageBucket: "portfolioo-9502c.firebasestorage.app",
  messagingSenderId: "599868254601",
  appId: "1:599868254601:web:93ad7b0fb3745703b11958",
  measurementId: "G-6R4KJ09M3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
