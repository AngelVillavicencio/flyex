import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./authFirebase";

export const ObtenerConsumos = async (huespedId) => {

    let dataList = [];

    const usersRef = collection(db, `huespedes/${huespedId}/consumos`);

    const q = query(usersRef, where("estado", "==", true), where('pagado', '==', false));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        dataList.push({ ...doc.data(), key: doc.id });
    });

    return dataList;

};
