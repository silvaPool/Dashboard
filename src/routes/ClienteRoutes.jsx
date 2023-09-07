import { Navigate } from "react-router-dom";
import Principal from "../components/Principal";
import Perfil from "../pages/Perfil";
import Cards from "../pages/cliente/Cards";
import HomeClienteDrawer from "../pages/cliente/HomeClienteDrawer";
import DiscoClienteDetalhes from "../pages/cliente/DiscoClienteDetalhes";
import AuthGuard from "../utils/AuthGuard";

const ClienteRoutes = [

    {
        path: "/home/cliente",
        element: (
            <AuthGuard>
                  <Navigate to="principal" replace />
                <HomeClienteDrawer />
            </AuthGuard>
        ),
        children: [
            {
                path: "principal",
                element: <Principal />
            },
            {
                path: "perfil",
                element: <Perfil />
            },
            {
                path: "discos",
                element: <Cards />
            },
            {
                path: "disco-details",
                element: <DiscoClienteDetalhes />
            },
           
        ],

    },
];

export default ClienteRoutes;