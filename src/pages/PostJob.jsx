import LayoutJob from "@/components/LayoutJob";
import UploadFile from "@/components/UploadFile";
import { usePostulaciones } from "@/hooks/usePostulaciones";
import {
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Divider, message } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";


export function PostJob() {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            category: '',
            checkbox: [],
            radio: ''
        }
    });
    const { idPostulacion } = useParams();
    const { getPostulacionById } = usePostulaciones()
    const [postulacion, setPostulacion] = useState({})


    const getPostulacion = async () => {

        console.log("id", idPostulacion)
        const res = await getPostulacionById(idPostulacion)
        if (!res)
            message.error("Error de carga")
        else
            setPostulacion(res)

    }

    const inputsInformacion = [
        { label: "Nombres *", id: "nombres", required: true, placeholder: "Nombres" },
        { label: "Apellidos *", id: "apellidos", required: true, placeholder: "Apellidos" },
        { label: "Correo electrónico *", id: "correo", required: true, placeholder: "Correo electrónico" },
        { label: "Número de celular (+51) *", id: "celular", required: true, placeholder: "Celular" },
        { label: "Documento de identidad *", id: "documento_identidad", required: true, placeholder: "DNI / RUC" },
        { label: "Lugar de residencia *", id: "residencia", required: true, placeholder: "Residencia" },
    ]


    const inputslinks = [
        { label: "Estudios *", id: "estudios", required: true, placeholder: "Ingeniería / Administración..." },
        { label: "Grado de estudios *", id: "estudios", required: true, placeholder: "Estudiante / Bachiller / Master" },
        { label: "Nivel de inglés *", id: "grado_ingles", required: true, placeholder: "Básico/Intermedio/Avanzado" },
        { label: "Link del perfil de Linkedin *", id: "linkedin", required: true, placeholder: "Link de Linkedin" },
    ]

    useEffect(() => {
        getPostulacion()
    }, [])

    const Item = ({ item }) => {
        return (
            <div className="w-full m-3 ml-5 mr-5 flex flex-col gap-6 sm:w-[40%] sm:m-auto sm:mt-3 sm:mb-3">
                <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                    {item.label}
                </Typography>
                <Input
                    size="lg"
                    placeholder={item.placeholder}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    {...register(item.id, { required: "Obligatorio" })}
                />
            </div>
        )
    }

    return (
        <LayoutJob>
            <section className="flex h-full w-full items-center justify-center mt-20 mb-20">
                <div className="w-full lg:w-50">
                    <div className="flex flex-col text-center">
                        <Typography variant="h2" className="font-bold mb-4">{postulacion?.puestoTrabajo}</Typography>
                        <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
                            {postulacion.descripcion}
                        </Typography>
                    </div>
                    <form className="mt-8 mb-2 mx-auto w-100 max-w-screen-lg lg:w-1/2 flex flex-wrap">
                        <Divider orientation="left">Información personal</Divider>
                        {inputsInformacion.map(item => {
                            return (
                                <Item item={item}></Item>
                            )
                        })}
                        <Divider orientation="left">Información profesional</Divider>
                        {inputslinks.map(item => {
                            return (
                                <Item item={item}></Item>
                            )
                        })}
                        <Divider orientation="left">Adjuntar archivos</Divider>

                        <UploadFile></UploadFile>


                        <Button className="mt-6" fullWidth>
                            Postular
                        </Button>

                        <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
                            Ya solicitaste la vacante?
                            <Link to="/inicia-sesion" className="text-gray-900 ml-1">Mira tu estado en tu correo</Link>
                        </Typography>
                    </form>

                </div>
            </section>
        </LayoutJob>

    );
}

export default PostJob;
