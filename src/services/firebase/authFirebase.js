import { app } from "./firebaseConfig";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


export const auth = getAuth(app);
export const db = getFirestore(app);

export const storage = getStorage();


export const createUserWithEmailAndLogin = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const logIn = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => await signOut(auth);

export const CallStateAuth = (callback) => {
  return onAuthStateChanged(auth, callback);
};


