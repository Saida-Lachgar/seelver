import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ActualitesDeLaResidence from './pages/actualites-de-la-residence';
import MenuDuJour from "./pages/menu-du-jour";
import ErrorPage from './pages/404-error';
import Layout from './layout';

function Main() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Outlet />
      </Layout>
    </QueryClientProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={
      createBrowserRouter([{
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/:id",
            element: <MenuDuJour />,
          },
          {
            path: "/:id/actualites-de-la-residence",
            element: <ActualitesDeLaResidence />,
          },
        ],
      }])} 
    />
  </React.StrictMode>
);