import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";

import Login from "../pages/Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import BrandDetails from "../pages/Home/BrandDetails/BrandDetails";
import Brands from "../pages/Shared/Brands/Brands";
import AddCar from "../pages/AddCar/AddCar";
import UpdateCar from "../pages/UpdateCar/UpdateCar";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Feedback from "../pages/Shared/ContactUs/Feedback/Feedback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
      },
      {
        path: "/addCar",
        element: <AddCar></AddCar>,
      },
      {
        path: "/updateCar",
        element: <UpdateCar></UpdateCar>,
      },
      {
        path: "/feedback",
        element: <Feedback></Feedback>,
      },
      {
        path: "/brandDetails/:id",
        element: (
          <PrivateRoute>
            <BrandDetails></BrandDetails>
          </PrivateRoute>
        ),
        loader: () =>
          // Promise.all([
            fetch("/brands.json"),
            // fetch("http://localhost:5000/car"),
          // ]),
      },
    ],
  },
]);
export default router;
