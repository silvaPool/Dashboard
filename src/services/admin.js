import { db } from "./FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export async function getUsers() {
    try {
        let arrayUsers = [];
        const querySnapshot = await getDocs(collection(db, "profile"));
        querySnapshot.forEach((doc) => {
            arrayUsers.push({...doc.data(), id: doc.id});
        });
        return arrayUsers;
    } catch (error) {
        return error;
    }
}