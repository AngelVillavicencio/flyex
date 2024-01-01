import { Link, useNavigate } from "react-router-dom"
import ExplainerSection from "../components/ExplainerSection"
import PricingSection from "../components/PricingSection"
import { Button } from "antd"
import hero from "../components/assets/hero.jpg";
import LayoutPages from "../components/LayoutPages";
import { useAuth } from "@/context/context/authContext/Index";



const Landing = () => {

    const { user } = useAuth();

    const navigate = useNavigate()


    if (user) {
        return navigate("/overview");
    }

    return (
        <>
            <LayoutPages>
                <div className="flex flex-col items-center pt-16">
                    <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full">
                        <div className="flex flex-col space-y-4 lg:w-1/2 w-full">
                            <h1 className="text-5xl font-bold">
                                Automatiza tu proceso de selección en minutos.
                            </h1>
                            <p className="text-gray-600 text-lg">
                                Usa la Inteligencia Artificial para seleccionar tu personal en tu empresa.
                                Adjunta tus cvs, sube los daatos de tus postulantes y la AI hará el trabajo por ti.
                            </p>
                            <div className="flex flex-col space-y-2">
                                <Link to="/inicia-sesion">
                                    <Button className="w-full lg:w-1/2">Pruébalo ahora</Button>
                                </Link>
                                <p className="text-sm text-gray-500 italic">
                                    ¡Empieza ahora! Descubre cómo nuestra IA puede mejorar tu proceso de contratación.
                                </p>
                            </div>
                            <div className="mt-4 text-gray-500">
                                <span>¿Ya eres miembro? </span>
                                <Link className="text-blue-600 hover:underline" to="/inicia-sesion">
                                    Iniciar sesión
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
                            <img
                                src={hero}
                                alt="hero"
                                className="rounded-lg object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <ExplainerSection />
                    <PricingSection />
                </div>
            </LayoutPages>



        </>
    )
}


export default Landing