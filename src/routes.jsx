import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { Home, Slogan, Footer, Notifications } from "@/pages/dashboard/index";
import { SignIn, SignUp } from "@/pages/auth";
import CrearPostulacion from "./pages/postulaciones/CrearPostulacion";
import VerPostulacion from "./pages/postulaciones/VerPostulacion";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routesSideNavbar = [
  {
    layout: "overview",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Inicio",
        path: "/inicio",
        element: <Home />,
      },
      /*{
        icon: <TableCellsIcon {...icon} />,
        name: "Slogan",
        path: "/slogan",
        element: <Slogan />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Footer",
        path: "/footer",
        element: <Footer />,
      },
      {
        icon: <UsersIcon {...icon} />,
        name: "Postulantes",
        path: "/postulantes",
        element: <Tables />,
      },
      {
        icon: <UsersIcon {...icon} />,
        name: "Membresía",
        path: "/membresia",
        element: <Tables />,
      }*/
    ],
  }
];

export const routes = [
  {
    layout: "overview",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Inicio",
        path: "/inicio",
        element: <Home />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Crear postulación",
        path: "/crear-postulacion",
        element: <CrearPostulacion />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Postulaciones",
        path: "/postulaciones/:idPostulacion",
        element: <VerPostulacion />,
      },
    ],
  }
];

export default routes;
