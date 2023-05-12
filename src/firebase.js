import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNs0AXEEGtMu9Goj1TjDAoMmJfX3YDqPU",
  authDomain: "ticketbookingauth.firebaseapp.com",
  projectId: "ticketbookingauth",
  storageBucket: "ticketbookingauth.appspot.com",
  messagingSenderId: "350095879981",
  appId: "1:350095879981:web:b2f589b666ec1707c7ada4",
  measurementId: "G-M0ZF29VC38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
