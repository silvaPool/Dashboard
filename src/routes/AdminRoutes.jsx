import Perfil from "../pages/Perfil";
import HomeAdmin from "../pages/admin/AdminHome";
import Workout from "../pages/admin/Workout";
import WorkoutDetails from "../pages/admin/WorkoutDetails";
// import HomeEstudante from "../pages/estudante/HomeEstudante";
import HomeEstudanteDrawer from "../pages/estudante/HomeEstudanteDrawer";
import AdminGuard from "../utils/AdminGuard";


const AdminRoutes = [

    {
        path: "/admin",
        element: (
            <AdminGuard>
                <HomeEstudanteDrawer />
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
                path: "workout",
                element: <Workout />
            },
            {
                path: "workout-details",
                element: <WorkoutDetails />
            },
        ],

    },
];

export default AdminRoutes;