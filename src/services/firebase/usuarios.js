import axios from 'axios';
import { db } from './authFirebase';
import { addDoc, collection, doc, getDoc, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore';

export const addUser = async (user) => {

    return await addDoc(collection(db, "usuarios"), {
        ...user,
        estado: true,
        createdAt: serverTimestamp(),
    });

}

export const editUser = async (id, user) => {

    const userRef = doc(db, "usuarios", id);
    return await updateDoc(userRef, { ...user });

}

export const removeUser = async (idUser) => {
    const userRef = doc(db, "usuarios", idUser);
    await updateDoc(userRef, { estado: false });
}

const baseUrl = 'https://us-central1-hotel-proyecto-76e6d.cloudfunctions.net/app';

export async function getAllUsers() {
    try {
        let listadoUsuarios = []
        const querySnapshot = await getDocs(collection(db, "usuarios"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            if (doc.data().estado) {
                listadoUsuarios.push({ id: doc.id, ...doc.data() })
            }

        });

        return { status: "Success", data: listadoUsuarios };
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

export async function getUserByUid(fireId, authId) {
    try {
        //const response = await axios.get(`${baseUrl}/api/usuarios/get/${uid}`);


        const docRef = doc(db, "usuarios", fireId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());

            return { status: "Success", data: docSnap.data() }
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            return { status: "Failed" }
        }


        //return response.data;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

export async function createUser(userData) {
    try {
        const response = await axios.post(`${baseUrl}/api/usuarios/create`, userData);
        
        await addUser({ uid: response.data.data.uid, ...userData })
        return response.data;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

export async function deleteUser(user) {
    try {

        const response = await axios.delete(`${baseUrl}/api/usuarios/delete/${user.uid}`);

        await updateDoc(doc(db, "usuarios", user.id), {
            estado: false
        });

        return response.data;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

export async function updateUser(uid, updatedUserData) {
    try {
        const response = await axios.put(`${baseUrl}/api/usuarios/update/${uid}`, updatedUserData);
        return response.data;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}