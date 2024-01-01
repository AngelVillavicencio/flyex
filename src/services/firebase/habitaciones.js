import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./authFirebase";

export const obtenerHabitaciones = async () => {

    let dataList = [];

    const usersRef = collection(db, "habitaciones");

    const q = query(usersRef, where("estado", "==", true));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        dataList.push({
            ...doc.data(),
            key: doc.id,
            value: doc.data().numero,
            label: doc.data().numero
        });
    });

    return dataList.sort((a, b) => parseInt(a.numero) - parseInt(b.numero));

};

export const UpdateHabitacion = async (habitacionId, request) => {
    await updateDoc(doc(db, 'habitaciones', habitacionId), request);
};