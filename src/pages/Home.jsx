import React from "react";
import { Button } from "antd";
import LayoutPages from "../components/LayoutPages";

const Home = () => {
    return (
        <>
            <LayoutPages>
                <div className="mt-5 mb-3 w-full">
                    <div className="text-left w-full">
                        <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
                            Bienvenidos a HotelAdmin
                        </h2>
                        <div className="flex justify-between items-center w-full">
                            <div>
                                <p className="mt-4 text-gray-500 sm:text-xl">
                                    Software de gestión de hoteles
                                </p>
                            </div>
                            <Button type="primary" onClick={() => window.location.href = "/registro-huesped"}>Registro huésped</Button>
                        </div>
                    </div>
                </div>


                <div className="mt-5">
                </div>

            </LayoutPages >
        </>
    );
};
export default Home;
