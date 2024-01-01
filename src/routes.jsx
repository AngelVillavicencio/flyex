import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

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
        name: "Postulaciones",
        path: "/postulaciones",
        element: <Profile />,
      },
      {
        icon: <UsersIcon {...icon} />,
        name: "Postulantes",
        path: "/postulantes",
        element: <Tables />,
      }
    ],
  },
];

export default routes;
