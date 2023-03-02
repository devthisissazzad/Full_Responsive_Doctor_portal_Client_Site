import { createBrowserRouter } from "react-router-dom";
import AppointMentRoute from "../Components/AppointMent/AppointMentRoute/AppointMentRoute";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import Layout from "../Components/Layout/Layout";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/appointment", element: <AppointMentRoute /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
]);
