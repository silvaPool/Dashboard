import { RouterProvider, createBrowserRouter } from "react-router-dom";
import OpenRoutes from "./OpenRoutes";
import ClienteRoutes from "./ClienteRoutes";
import MostruarioRoutes from "./MostruarioRoutes";
import AdminRoutes from "./AdminRoutes";

function Routes() {

    const router = createBrowserRouter([...ClienteRoutes, ...OpenRoutes, ...MostruarioRoutes, ...AdminRoutes]);

    return (<RouterProvider router={router} />)
}

export default Routes;