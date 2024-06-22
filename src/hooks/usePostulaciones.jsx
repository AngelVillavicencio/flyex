import { getPostulaciones, getPostulacion, addPostulacion, editPostulacion, removePostulacion } from "../services/postulaciones"

import { useState, useEffect } from "react"

export const usePostulaciones = () => {

    const [postulaciones, setPostulaciones] = useState([])

    const getPostulacionById = async (id) => {
        const postulacion_ = await getPostulacion(id)
        if (!postulacion_)
            return null
        return postulacion_
    }

    const getListadoPostulacion = async () => {

        const postulaciones_ = await getPostulaciones()

        if (!postulaciones_)
            setPostulaciones([])

        setPostulaciones(postulaciones_)
    }

    const createOnePostulacion = async (postulacion) => {

        const response = await addPostulacion(postulacion)

        if (!response)
            return null

        await getListadoPostulacion()
        return true
    }

    const editOnePostulacion = async (id, postulacion) => {
        const response = await editPostulacion(id, postulacion)
        if (!response)
            return null

        await getListadoPostulacion()
        return true

    }

    const removeOnePostulacion = async (id) => {
        const response = await removePostulacion(id)
        if (!response)
            return null

        await getListadoPostulacion()
        return true

    }

    useEffect(() => {
        console.log("RENDER USE EFFECT POSTULACIONES")
        getListadoPostulacion()
    }, [])

    return { postulaciones, getPostulacionById, createOnePostulacion, editOnePostulacion, removeOnePostulacion }
}

