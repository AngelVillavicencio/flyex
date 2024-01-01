import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./authFirebase";

export const ObtenerLavados = async () => {

    let dataList = [];

    const productsRef = collection(db, "lavados");

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