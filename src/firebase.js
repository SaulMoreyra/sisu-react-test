import firebase from "firebase";
import { firebaseConfig } from './env';

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;