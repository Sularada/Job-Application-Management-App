import { auth } from "../firebase/firebase";

export async function unsubscribe(setUserAuth) {
  auth.onAuthStateChanged((userAuth) => {
    if (userAuth) {
      console.log("auth : " + userAuth);
      setUserAuth(userAuth);
    } else {
      setUserAuth(null);
    }
  });
}
