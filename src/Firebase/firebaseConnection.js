import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnXbgJvOL8Bl6M_egtvRVy_O_L1cI99sY",
  authDomain: "taskapp-d88d1.firebaseapp.com",
  databaseURL: "https://taskapp-d88d1-default-rtdb.firebaseio.com",
  projectId: "taskapp-d88d1",
  storageBucket: "taskapp-d88d1.appspot.com",
  messagingSenderId: "221508383966",
  appId: "1:221508383966:web:86559891e844baeefa3e4f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
