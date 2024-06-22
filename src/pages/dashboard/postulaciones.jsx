import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
  Select, Option
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";
import { Space } from "antd";
import { useEffect } from "react";
import { usePostulaciones } from "@/hooks/usePostulaciones";

export function Profile() {

  const { postulaciones } = usePostulaciones()



  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-52 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="px-4 pb-4">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Procesos de selección
            </Typography>
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500 mb-4"
            >
              Busca un proceso de selección
            </Typography>
            <Space className="flex flex-wrap m-auto">
              <Select color="blue" label="Busca por mes">
                <Option>Todas las postulaciones</Option>
                <Option>Enero</Option>
                <Option>Febrero</Option>
                <Option>Marzo</Option>
                <Option>Abril</Option>
                <Option>Mayo</Option>
                <Option>Junio</Option>
                <Option>Julio</Option>
                <Option>Agosto</Option>
                <Option>Septiembre</Option>
                <Option>Octubre</Option>
                <Option>Noviembre</Option>
                <Option>Diciembre</Option>
              </Select>
              <Select color="blue" label="Busca por año">
                <Option>2023</Option>
                <Option>2022</Option>
                <Option>2021</Option>
              </Select>
            </Space>
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
              {postulaciones?.map(
                ({ puestoTrabajo, descripcion, tipo, id }) => (
                  <Card key={id} color="transparent" shadow={false}>
                    <CardBody className="py-0 px-1">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mt-1 mb-2"
                      >
                        {puestoTrabajo}
                      </Typography>
                      <div>
                        {
                          /*
                          members.map(({ img, name }, key) => (
                          <Tooltip key={name} content={name}>
                            <Avatar
                              src="/img/team-1.jpeg"
                              alt={name}
                              size="xs"
                              variant="circular"
                              className={`cursor-pointer border-2 border-white ${key === 0 ? "" : "-ml-2.5"
                                }`}
                            />
                          </Tooltip>
                              ))*/}
                      </div>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-900 mt-2"
                      >
                        {tipo}
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500 text-justify"
                      >
                        {descripcion}
                      </Typography>
                    </CardBody>
                    <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                      <Link to={`/overview/postulaciones/${id}`}>
                        <Button variant="outlined" size="sm">
                          ver proceso
                        </Button>
                      </Link>

                    </CardFooter>
                  </Card>
                )
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
