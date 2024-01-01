import { doc, getDoc } from "firebase/firestore";
import { db } from "./authFirebase";

export const ObtenerHuespedaPorId = async (huespedId) => {

    try {
        const docRef = doc(db, "huespedes", huespedId);

        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return null;
        }

        return { ...docSnap.data(), key: docSnap.id };
    } catch (error) {

    }

};