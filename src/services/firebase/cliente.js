import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./authFirebase";

export const BuscarClientePorNumeroDocumento = async (numero_documento) => {

    const q = query(collection(db, "clientes"), where("estado", "==", true), where('number_document', '==', numero_documento));

    const docSnap = await getDocs(q);

    let cliente = null;

    docSnap.forEach((item) => {

        const itemData = item.data();

        if (itemData.number_document === numero_documento) {
            cliente = { ...itemData, key: item.id };
        }

    });

    return cliente;

};
