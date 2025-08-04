// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyChQ5GT-nEtBXFh84l5wVu5WfoQqOTQecM",
//     authDomain: "formikapp-8593a.firebaseapp.com",
//     projectId: "formikapp-8593a",
//     storageBucket: "formikapp-8593a.firebasestorage.app",
//     messagingSenderId: "294081387801",
//     appId: "1:294081387801:web:ee405ea71da2aa5900f988",
//     measurementId: "G-LN3N1H8GRV"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// export { auth, app, db };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7JGNBb7Z8W0qMhg_sdDTox-FgFD6C5Mo",
  authDomain: "job-application-management-app.firebaseapp.com",
  projectId: "job-application-management-app",
  storageBucket: "job-application-management-app.firebasestorage.app",
  messagingSenderId: "118101925685",
  appId: "1:118101925685:web:dd61e30adaccfb1638f67c",
  measurementId: "G-2VZB3BESDD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, app, db };
