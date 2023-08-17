import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../layout/Header";
import Usuario from "../pages/auth/Usuario";
import Cadastro from "../pages/auth/Cadastro";
import Reset from "../pages/auth/ResetSenha";

const MostruarioRoutes = [
   
    {
        path: "/",
        element: <Header />,
        children: [
            {
                path: "/auth/usuario",
                element: <Usuario />,
            },
            {
                path: "/auth/cadastro",
                element: <Cadastro />,
            },
            {
                path: "/reset",
                element: <Reset />,
            },
        ]

    }
        

    
  
];

export default MostruarioRoutes;