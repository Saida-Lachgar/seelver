import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Blog from "./pages/Blog/index.tsx";
import MenuDuJour from "./pages/menu-du-jour/index.tsx";

const router = createBrowserRouter([
  {
    path: "/:id",
    element: <App />,
    children: [
      {
        path: "/:id",
        element: <MenuDuJour />,
      },
      {
        path: "/:id/blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);