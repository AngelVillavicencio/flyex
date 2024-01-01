import { collection, where, query, getDocs } from "firebase/firestore";
import { db } from "./authFirebase";

export const ObtenerProductos = async () => {

    let dataList = [];

    const productsRef = collection(db, "productos");

    const q = query(productsRef, where("estado", "==", true));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        dataList.push({ ...doc.data(), id: doc.id });
    });

    return dataList.sort((a, b) => parseInt(a.name) - parseInt(b.name));

};