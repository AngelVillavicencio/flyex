import { Link, useNavigate } from "react-router-dom"
import { Divider, Form, Space, message } from "antd"
import { useAuth } from "@/context/context/authContext/Index";
import { Input, Option, Select, Textarea, Typography, Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { usePostulaciones } from "../../hooks/usePostulaciones.jsx";
import { setLoading, useMaterialTailwindController } from "@/context/index.jsx";
const stylesInputform = "peer h-full min-h-[200px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900  focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"


const inputs = [
    { label: "Descripción del trabajo", id: "descripcion", required: true },
    { label: "Responsabilidades o Funciones", id: "responsabilidades", required: true },
    { label: "Requisitos Obligatorios", id: "requisitosObligatorios", required: true },
    { label: "Requisitos Opcionales", id: "requisitos", required: false },
    { label: "Conocimientos técnicos", id: "conocimientosTecnicos", required: false },
    { label: "Habilidades Blandas", id: "habilidadesBlandas", required: false },
    { label: "Beneficios", id: "beneficios", required: false },
    { label: "Datos del lugar de trabajo", id: "lugarTrabajo", required: false }
]
const CrearPostulacion = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const navigate = useNavigate()
    const { createOnePostulacion } = usePostulaciones()
    const [controller, dispatch] = useMaterialTailwindController();
    const { loading, messageLoading } = controller;


    const onSubmit = async data => {
        setLoading(dispatch, true)
        const response = await createOnePostulacion(data)
        if (response) {
            message.success("Creado exitosamente")
            setLoading(dispatch, false)
            return navigate("/overview/postulaciones");
        } else {
            message.error("Error")
        }
        setLoading(dispatch, false)
        console.log("correct", data)
    };
    const onError = data => {
        console.log(data);
        const errorArray = Object.keys(data);
        console.log(errorArray);
        errorArray.forEach((item) => {
            message.warning(`Error ${item}`)
        })
    };

    if (user) {
        return navigate("/overview");
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div className="flex mt-5 mb-5 flex-col gap-6">
                    <Typography variant="h4" color="blue-gray" className="mb-2">Crea una postulación</Typography>
                    <Divider orientation="left" >
                        Información Básica
                    </Divider>
                    <div className="w-full flex flex-wrap">
                        <div className="w-full flex flex-wrap">
                            <div className="flex w-[100%] sm:w-[30%] md:w-[40%] m-3">
                                <Input
                                    size="lg"
                                    label="Título del puesto de trabajo *"
                                    className="w-full"
                                    {...register("puestoTrabajo", {
                                        required: "Obligatorio"
                                    })}
                                />
                            </div>
                            <div className="w-full flex sm:w-[25%] min-w-[200px] m-3">
                                <select
                                    size="lg"
                                    label="Tipo *"
                                    className="w-full peer h-full bg-transparent text-blue-gray-700 font-sans font-normal text-left outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border text-sm px-3 py-3 rounded-[7px] border-blue-gray-200"
                                    {...register("tipo", {
                                        required: "Obligatorio"
                                    })}
                                >
                                    <option>Remoto</option>
                                    <option>Presencial</option>
                                    <option>Híbrido</option>
                                </select>
                            </div>
                            <div className="w-full flex sm:w-[25%] min-w-[200px] m-3">
                                <select
                                    size="lg"
                                    label="Horario *"
                                    className="w-full peer h-full bg-transparent text-blue-gray-700 font-sans font-normal text-left outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border text-sm px-3 py-3 rounded-[7px] border-blue-gray-200"
                                    {...register("horario", {
                                        required: "Obligatorio"
                                    })}
                                >
                                    <option>Full Time</option>
                                    <option>Part time</option>
                                </select>
                            </div>
                            <div className="w-full flex sm:w-[25%] min-w-[200px] m-3">
                                <Input
                                    size="lg"
                                    label="Salario *"
                                    className="w-full"
                                    {...register("salario", {
                                        required: "Obligatorio"
                                    })}
                                />
                            </div>
                            <div className="w-full flex sm:w-[25%] min-w-[200px] m-3">
                                <Input
                                    size="lg"
                                    label="Ubicación *"
                                    className="w-full"
                                    value="Lima/Perú"
                                    {...register("ubicacion", {
                                        required: "Obligatorio"
                                    })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:grid grid-cols-2 gap-5" >
                        {
                            inputs.map((item => (
                                <div class="relative w-full min-w-[200px]">
                                    <Textarea
                                        label={`${item.label} ${item.required ? "*" : ""}`}
                                        className={stylesInputform}
                                        {...register(item.id, {
                                            required: item.required ? "Obligatorio" : false
                                        })}
                                    >
                                    </Textarea>
                                </div>
                            )))
                        }


                    </div>
                    <div className="flex w-[25%] min-w-[200px]">
                        <Button type="submit">
                            Crear postulación
                        </Button>
                    </div>

                </div>
            </form>
        </>
    )
}


export default CrearPostulacion