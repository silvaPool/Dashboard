import {  setDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { db, storage, database } from "./FirebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ref as refDatabase, set } from "firebase/database";

export async function setProfileData(profile, uid) {

    try {
        const docRef = await setDoc(doc(db, "profile", uid), profile);

        // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function updateProfile(profile, uid) {
    try {
        const profileUserRef = doc(db, "profile", uid);
        const res = await updateDoc(profileUserRef, profile);
        console.log(res);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function getProfile(uid) {
    const profileUserRef = doc(db, "profile", uid);
    const docSnap = await getDoc(profileUserRef);
    return docSnap.data();
}

export async function setPhoto(file, uid) {
    try {
        const storageRef = ref(storage, uid);

       const snapshot = await uploadBytes(storageRef, file);

       const urlDownloadData = await getDownloadURL(storageRef, snapshot);
            console.log(urlDownloadData);
            await updateProfile({urlImage:urlDownloadData}, uid);

            return urlDownloadData;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function setWorkout(uid) {
    const arrayDays = [
     {
        title: "Coleção 1",
        group: [],
     },
     {
        title: "Coleção 2",
        group: [],
     },
     {
        title: "Coleção 3",
        group: [],
     },
     {
        title: "Coleção 4",
        group: [],
     },
     {
        title: "Coleção 5",
        group: [],
     },
     {
        title: "Coleção 6",
        group: [],
     },
    ];


    try {
        set(refDatabase(database, 'workout/' + uid), arrayDays);
    } catch (e) {
        console.error(e);
    }
}