import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./authFirebase";

export const ObtenerHuespedesLavados = async () => {

    let dataList = [];

    const productsRef = collection(db, "huespedes-lavados");

    const q = query(productsRef, where("estado", "==", true));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        dataList.push({ ...doc.data(), id: doc.id });
    });

    const listadOrdenado = dataList.sort((a, b) => {
        const fechaA = a.createdAt.seconds * 1000 + a.createdAt.nanoseconds / 1e6;
        const fechaB = b.createdAt.seconds * 1000 + b.createdAt.nanoseconds / 1e6;
        return fechaB - fechaA;
    });

    return listadOrdenado;

};

export const UpdateHuespedLavado = async (huespedLavadoId, request) => {
    await updateDoc(doc(db, 'huespedes-lavados', huespedLavadoId), request);
};