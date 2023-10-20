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
import AddedCardDetails from "../pages/AddCar/AddedCardDetails";
import AddedCard from "../pages/AddCar/AddedCard";
// import AddToCart from "../pages/AddCar/AddToCart";
import CartList from "../pages/CartList/CartList";

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
        element: (
          <PrivateRoute>
            <AddCar></AddCar>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateCar/:id",
        element: (
          <PrivateRoute>
            <UpdateCar></UpdateCar>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const { id } = params;
          const response = await fetch(`http://localhost:5000/carts/${id}`);
          const data = await response.json();
          return data; // Return the parsed JSON data from the API
        },
      },
      {
        path: "/addedCard/:id",
        element: (
          <PrivateRoute>
            {" "}
            <AddedCard></AddedCard>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/car"),
      },
      {
        path: "/addedCardDetails/:id",
        element: (
          <PrivateRoute>
            <AddedCardDetails></AddedCardDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/car"),
      },
      {
        path: "/feedback",
        element: <Feedback></Feedback>,
      },
      {
        path: "/brandDetails/:id",
        element: <BrandDetails></BrandDetails>,
        loader: () => fetch("http://localhost:5000/brand"),
      },
      {
        path: "/carts",
        element: (
          <PrivateRoute>
            {" "}
            <CartList />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
