import { ref, child, get, set } from "firebase/database";
import { database } from "./FirebaseConfig";

export async function getDisco(uid) {
    const dbRef = ref(database);
    try {
        const snapshot = await get(child(dbRef, `disco/${uid}`));
        return snapshot.val();
    } catch (error) {
        console.log(error);
        return error;
    }

}

export async function updateDisco(uid, values, title, index) {
    try {
        set(ref(database, 'disco/' + uid + '/' + index), {title: title, group: values});
        alert('Os valores foram atualizados');
    } catch (e) {
        console.error(e);
    }
}