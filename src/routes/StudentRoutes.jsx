import { Navigate } from "react-router-dom";
import Principal from "../components/Principal";
import Perfil from "../pages/Perfil";
import Cards from "../pages/estudante/Cards";
import HomeEstudanteDrawer from "../pages/estudante/HomeEstudanteDrawer";
import StudentWorkoutDetails from "../pages/estudante/WorkoutStudentDetails";
import AuthGuard from "../utils/AuthGuard";

const StudentRoutes = [

    {
        path: "/home/student",
        element: (
            <AuthGuard>
                  <Navigate to="principal" replace />
                <HomeEstudanteDrawer />
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
                element: <StudentWorkoutDetails />
            },
           
        ],

    },
];

export default StudentRoutes;