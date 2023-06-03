import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./routes/Home";
import Services from "./routes/Services";
import Booking from "./routes/Booking";
import Packages from "./routes/Packages";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp"

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "packages",
        element: <Packages />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);