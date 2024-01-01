import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./authFirebase";

export const CantidadVentasBoletas = async () => {

    let dataList = [];

    const usersRef = collection(db, "ventas");

    const q = query(usersRef,
        where('tipo_comprobante', '==', 'BOLETA'),
        where('estado', '==', true)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        dataList.push({ ...doc.data(), key: doc.id });
    });

    return dataList;

};

export const ObtenerVentasActuales = async () => {

    let dataList = [];

    const usersRef = collection(db, "ventas");

    const now = (new Date()).setHours(0, 0, 0, 0);

    const q = query(usersRef, where('estado', '==', true));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {

        const fechaActual = new Date();

        const fechaRegistro = new Date(doc.data().createdAt.seconds * 1000);

        if (fechaActual.getDate() === fechaRegistro.getDate() &&
            fechaActual.getMonth() === fechaRegistro.getMonth() &&
            fechaActual.getFullYear() === fechaRegistro.getFullYear()) {
            dataList.push({ ...doc.data(), key: doc.id });
        }

    });

    return dataList;

};

export const CantidadVentasFacturas = async () => {

    let dataList = [];

    const usersRef = collection(db, "ventas");

    const q = query(usersRef,
        where('tipo_comprobante', '==', 'FACTURA'),
        where('estado', '==', true)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        dataList.push({ ...doc.data(), key: doc.id });
    });

    return dataList;

};

export const ObtenerVentaPorId = async (ventaId) => {

    const docRef = doc(db, "ventas", ventaId);
    const docSnap = await getDoc(docRef);

    console.log('TEST');

    if (!docSnap.exists()) {
        return null;
    }

    return docSnap.data();

};