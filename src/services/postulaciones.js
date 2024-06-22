import { collection, where, query, getDocs, doc, getDoc, addDoc, serverTimestamp, updateDoc } from "firebase/firestore"
import { db } from "./firebase"

export const getPostulaciones = async () => {

    try {
        let dataList = [];

        const productsRef = collection(db, "postulaciones");

        const q = query(productsRef, where("estado", "==", true));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            dataList.push({ ...doc.data(), id: doc.id });
        });

        return dataList.sort((a, b) => parseInt(a.name) - parseInt(b.name));
    }
    catch (e) {
        return null
    }
};


export const getPostulacion = async (id) => {

    try {
        const docRef = doc(db, "postulaciones", id);

        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return null;
        }

        return { ...docSnap.data(), id: docSnap.id };
    } catch (error) {
        return null
    }
};


export const addPostulacion = async (postulacion) => {
    try {
        return await addDoc(collection(db, "postulaciones"), {
            ...postulacion,
            estado: true,
            createdAt: serverTimestamp(),
        });
    } catch (error) {
        return null
    }

}

export const editPostulacion = async (id, postulacion) => {

    const ref = doc(db, "postulaciones", id);
    return await updateDoc(ref, { ...postulacion });

}

export const removePostulacion = async (id) => {

    const ref = doc(db, "postulaciones", id);
    return await updateDoc(ref, { estado: false });

}