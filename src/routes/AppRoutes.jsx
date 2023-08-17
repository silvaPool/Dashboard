import { RouterProvider, createBrowserRouter } from "react-router-dom";
import OpenRoutes from "./OpenRoutes";
import StudentRoutes from "./StudentRoutes";
import MostruarioRoutes from "./MostruarioRoutes";
import AdminRoutes from "./AdminRoutes";

function Routes() {

    const router = createBrowserRouter([...StudentRoutes, ...OpenRoutes, ...MostruarioRoutes, ...AdminRoutes]);

    return (<RouterProvider router={router} />)
}

export default Routes;