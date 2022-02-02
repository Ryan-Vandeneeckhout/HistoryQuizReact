import { initializeApp } from 'firebase/app';

const firebaseConfig = {

  apiKey: "AIzaSyA22Zra2jVxLdHTY1IxvOq_w83Xy4nA1G4",
  authDomain: "historyquiz-28cae.firebaseapp.com",
  databaseURL: "https://historyquiz-28cae-default-rtdb.firebaseio.com",
  projectId: "historyquiz-28cae",
  storageBucket: "historyquiz-28cae.appspot.com",
  messagingSenderId: "770376312483",
  appId: "1:770376312483:web:a9d6b5f7f215bbfd184116",
  measurementId: "G-G6TN9VSPGB"
};


const firebase = initializeApp(firebaseConfig);

export default firebase;