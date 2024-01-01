import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useAuth } from "@/context/context/authContext/Index";
import { logOut } from "@/services/firebase/authFirebase";


const Navbar = () => {

    const { user, setStateUser } = useAuth();
    const [isOpenAvatar, setIsOpenAvatar] = useState(false)


    const logOutSesion = () => {
        logOut().then(() => {
            setStateUser(null);
        });
    };

    return (

        <nav className="text-center px-4 lg:px-40 py-4  sm:h-20 w-full sm:pt-2 pt-4 border-b mt-5 flex sm:flex-row flex-col justify-between items-center space-y-3 sm:mb-0 mb-3 border-gray-200">
            <div className="px-3 py-3 lg:px-5 lg:pl-3 w-full">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                        {
                            user && <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                        }

                        <Link to={user ? "/overview" : "/"} className="flex ms-2 md:me-24">
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">Selection IA</span>
                        </Link>
                    </div>
                    {
                        user ? (<div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div className="relative">
                                    <button
                                        type="button"
                                        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 " aria-expanded="false"
                                        data-dropdown-toggle="dropdown-user"
                                        onClick={() => setIsOpenAvatar(!isOpenAvatar)}>
                                        <span className="sr-only">Open user menu</span>
                                        <img class="h-8 w-8 rounded-full" src="https://img.freepik.com/psd-premium/usuario-icematte_161669-211.jpg?w=1380" alt="" />
                                    </button>
                                    <div className={`absolute right-0 z-50 ${isOpenAvatar ? "" : "hidden"} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow `} id="dropdown-user">
                                        <div className="px-4 py-3" role="none">
                                            <p className="text-sm text-gray-900" role="none">
                                                {user?.name}
                                            </p>
                                            <p className="text-sm font-medium text-gray-900 truncate " role="none">
                                                {user?.email}
                                            </p>
                                        </div>
                                        <ul className="py-1" role="none">

                                            <li>
                                                <Link
                                                    to="/"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                                                    role="menuitem"
                                                    onClick={() => logOutSesion()}
                                                >Salir</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>) : (<div>
                            {
                                window.location.pathname.includes("inicia-sesion") ? <Link to="/registrarse">
                                    <Button>Registrarse</Button>
                                </Link> : <Link to="/inicia-sesion">
                                    <Button>Inicia sesión</Button>
                                </Link>
                            }

                        </div>)
                    }

                </div>
            </div>
        </nav >
    )
}



const LayoutPages = ({ children }) => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="">
                {children}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default LayoutPages



const Footer = () => {
    return (
        <footer className="text-center px-4 lg:px-40 py-4 h-12 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center space-y-3 sm:mb-0 mb-3 border-gray-200">
            <div className="text-gray-500">
                {" "}
                Fue fundada por {" "}
                <Link
                    className="text-blue-600 hover:underline font-bold"
                    to="https://www.linkedin.com/in/angelvillavicencio/"
                    target="_blank"
                >
                    Angel Villavicencio{" "}
                </Link>
            </div>
            <div className="flex space-x-4 pb-4 sm:pb-0">
                <Link
                    to="#"
                    className="group"
                    aria-label="Twitter"
                    target="_blank"
                >
                    <svg
                        aria-hidden="true"
                        className="h-6 w-6 fill-gray-500 group-hover:fill-gray-300"
                    >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
                    </svg>
                </Link>
                <Link
                    to="#"
                    className="group"
                    aria-label="GitHub"
                    target="_blank"
                >
                    <svg
                        aria-hidden="true"
                        className="h-6 w-6 fill-gray-500 group-hover:fill-gray-300"
                    >
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                    </svg>
                </Link>
            </div>
        </footer>
    )
}