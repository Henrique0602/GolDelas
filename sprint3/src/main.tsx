import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Adm from "@/pages/Adm";
import Campeonato from "@/pages/Campeonato";
import Estatisticas from "@/pages/Estatisticas";
import Home from "@/pages/Home";
import Interesse from "@/pages/Interesse";
import Jogadora from "@/pages/Jogadora";
import Login from "@/pages/Login";
import Noticias from "@/pages/Noticias";
import Perfil from "@/pages/Perfil";
import Time from "@/pages/Time";
import "@/index.css";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/Home", element: <Home /> },
  { path: "/Campeonato", element: <Campeonato /> },
  { path: "/Adm", element: <Adm /> },
  { path: "/Interesse", element: <Interesse /> },
  { path: "/Jogadora", element: <Jogadora /> },
  { path: "/Noticias", element: <Noticias /> },
  { path: "/Perfil/:id", element: <Perfil /> },
  { path: "/Time", element: <Time /> },
  { path: "/Estatisticas/:id", element: <Estatisticas /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

