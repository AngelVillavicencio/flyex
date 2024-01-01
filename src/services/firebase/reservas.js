import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./authFirebase";

export const ObtenerReservas = async () => {

    let dataList = [];

    const usersRef = collection(db, "reservas");

    const q = query(usersRef,
        where('estadoHabitacion', '==', true),
        where('estado', '==', true)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        dataList.push({ ...doc.data(), key: doc.id });
    });

    return dataList;

};

export const ObtenerReservaPorId = async (reservaId) => {

    try {
        const docRef = doc(db, "reservas", reservaId);

        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return null;
        }

        return { ...docSnap.data(), key: docSnap.id };
    } catch (error) {

    }

};
