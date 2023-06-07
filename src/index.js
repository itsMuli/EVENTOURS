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
import Searchbar from "./Components/Searchbar";
import "./App.css";
import Home from "./routes/Home";
import Destinations from "./routes/Destinations";
import Booking from "./routes/Booking";
import Packages from "./routes/Packages";
import Holidays from "./routes/Holidays"

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Searchbar />
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
        path: "destinations",
        element: <Destinations />,
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
        path: "holidays",
        element: <Holidays />
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);