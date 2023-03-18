import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC68XgDrLIaNNyY83h0xDayK0OOY896V1I",
  authDomain: "hud-unicommunity-chat.firebaseapp.com",
  projectId: "hud-unicommunity-chat",
  storageBucket: "hud-unicommunity-chat.appspot.com",
  messagingSenderId: "506688961077",
  appId: "1:506688961077:web:dc00114f2ec8395d534f7c",
  measurementId: "G-NRX1ETGPLX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
const analytics = getAnalytics(app);