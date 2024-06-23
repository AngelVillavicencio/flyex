import { Link } from "react-router-dom";
import { Button } from "antd";
import background from "/src/assets/background.png";
import LayoutPages from "../components/LayoutPages";
import tickets from "/src/assets/pngegg.png";

const Landing = () => {
    return (
        <LayoutPages>
            <style>
                {`
                    .rotate-135 {
                        transform: rotate(135deg);
                    }
                    .rotate-45 {
                        transform: rotate(45deg);
                    }
                `}
            </style>
        <nav className="w-full flex justify-center py-3">
                <ul className="flex space-x-8">
                    <li className="flex items-center space-x-2">
                        <img src={tickets} alt="Boletos" className="w-6 h-6" transform= "rotate-135" />
                        <Link to="/comprar" className="text-lg font-semibold">Comprar Viajes</Link>
                    </li>
                    <li className="flex items-center space-x-2">
                        <img src={tickets} alt="Boletos" className="w-6 h-6" transform= "rotate-45" />
                        <Link to="/vender" className="text-lg font-semibold">Vender Viajes</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex flex-col items-center pt-0">
                <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full">
                    <div className="flex flex-col space-y-4 lg:w-1/2 w-full">
                        <h1 className="text-5xl font-bold text-center lg:text-left">
                            ¿Viaje frustrado? ¡Recupera tu dinero con Flyex!
                        </h1>
                        <div className="flex flex-col space-y-2">
                            <div className="flex flex-col lg:flex-row gap-4">
                                <Link to="/inicia-sesion" className="lg:w-1/2">
                                    <Button className="w-full">COMPRAR VUELO</Button>
                                </Link>
                                <Link to="/inicia-sesion" className="lg:w-1/2">
                                    <Button className="w-full">VENDER VUELO</Button>
                                </Link>
                            </div>
                            <p className="text-sm text-gray-500 italic text-center lg:text-left">
                                ¡Empieza ahora! Descubre la tranquilidad con Flyex. Convierte tus contratiempos en oportunidades y recupera el valor de tus viajes no realizados.
                            </p>
                        </div>
                        <div className="mt-4 text-gray-500 text-center lg:text-left">
                            <span>¿Ya eres miembro? </span>
                            <Link className="text-blue-600 hover:underline" to="/inicia-sesion">
                                Iniciar sesión
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
                        <img
                            src={background}
                            alt="FlyEx"
                            className="rounded-lg object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </LayoutPages>
    );
};

export default Landing;
