import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { redirect } from "react-router-dom";
import { auth, db } from "~/firebase/firebase";

export const roleLoader = (requiredRoles) => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        resolve(redirect("/auth/login"));
      } else {
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userRole = userDoc.data().role;
          if (requiredRoles.includes(userRole)) {
            resolve(null);
          } else {
            resolve(redirect("/auth/login"));
          }
        } else {
          resolve(redirect("/auth/login"));
        }
      }
    });
  });
};
