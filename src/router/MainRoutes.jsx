import React from "react";
import { Route, Routes } from "react-router-dom";
import HeroesPage from "../page/HeroesPage";
import HomePage from "../page/HomePage";

const MainRoutes = () => {
  const ROUTES = [
    {
      id: 1,
      path: "/",
      element: <HomePage/>
    },
    {
      id: 2,
      path: "/heroes",
      element: <HeroesPage />,
    },
  ];
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
