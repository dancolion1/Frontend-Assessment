import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Dashboard from "pages/Dashboard";
import Messages from "pages/Messages";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "messages",
      element: <Messages />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
