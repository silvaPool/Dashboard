import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../layout/Header";
import Usuario from "../pages/auth/Usuario";
import Cadastro from "../pages/auth/Cadastro";
import Reset from "../pages/auth/ResetSenha";
import MainGuard from "../utils/MainGuard";
import { Navigate } from "react-router-dom";

const OpenRoutes = [
   
    {
        path: "/",
        element: (
            <MainGuard>
                  <Navigate to="/auth/usuario" replace />
                <Header />
            </MainGuard>
        ),
        children: [
            {
                path: "/auth/usuario",
                element: <Usuario />,
            },
            {
                path: "/cadastro",
                element: <Cadastro />,
            },
            {
                path: "/reset",
                element: <Reset />,
            },
        ]

    }
        

    
  
];

export default OpenRoutes;