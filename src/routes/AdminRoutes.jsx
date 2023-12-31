import Perfil from "../pages/Perfil";
import HomeAdmin from "../pages/admin/AdminHome";
import Discos from "../pages/admin/Discos";
import DiscoDetails from "../pages/admin/DiscoDetails";
// import HomeEstudante from "../pages/estudante/HomeEstudante";
import HomeClienteDrawer from "../pages/cliente/HomeClienteDrawer";
import AdminGuard from "../utils/AdminGuard";


const AdminRoutes = [

    {
        path: "/admin",
        element: (
            <AdminGuard>
                <HomeClienteDrawer />
            </AdminGuard>
        ),
        children: [
            {
                path: "home",
                element: <HomeAdmin />
            },
            {
                path: "user-profile",
                element: <Perfil />
            },
            {
                path: "disco",
                element: <Discos />
            },
            {
                path: "disco-details",
                element: <DiscoDetails />
            },
        ],

    },
];

export default AdminRoutes;