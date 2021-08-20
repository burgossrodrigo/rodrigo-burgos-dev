import firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";
import "firebase/auth";


const firebaseConfig = {
	apiKey: "AIzaSyC_YYlEmoA0zK021Sb5bsz8Jem0N0WjXnY",
    authDomain: "pizzaria-la-poliata.firebaseapp.com",
    databaseURL: "https://pizzaria-la-poliata.firebaseio.com",
    projectId: "pizzaria-la-poliata",
    storageBucket: "pizzaria-la-poliata.appspot.com",
    messagingSenderId: "198363577520",
    appId: "1:198363577520:web:8b16c67ed288a6ec45cf75",
    measurementId: "G-TE8DRSTENY"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const database = firebase.database();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { storage, provider, database, auth, firebase as default };