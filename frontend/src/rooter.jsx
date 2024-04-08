import { createBrowserRouter } from "react-router-dom";
import Home from './pages/home';
import SelectUser from './pages/selectUser';
import ErrorPage from "./pages/error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SelectUser />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:id",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/erreur404",
    element: <ErrorPage />,
  },
]);
