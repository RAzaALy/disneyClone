import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBIcFOKln7QKPwPFwUyvdlIXQNvWEl6p_w",
  authDomain: "disneyclone-9f322.firebaseapp.com",
  databaseURL: "https://disneyclone-9f322-default-rtdb.firebaseio.com",
  projectId: "disneyclone-9f322",
  storageBucket: "disneyclone-9f322.appspot.com",
  messagingSenderId: "669155649011",
  appId: "1:669155649011:web:c3898e2709a9bfe3a91e86",
  measurementId: "G-GJ2RGYLXLW"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
