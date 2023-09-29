import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.tsx";
import "./index.css";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import { About } from "./components/About.tsx";
import { redirect } from "react-router-dom";
import { Experience } from "./components/Experience.tsx";
import { Contact } from "./components/Contact.tsx";
import { ExpandedExperience } from "./components/ExpandedExperience.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/experience",
                element: <Experience />,
            },
            {
                path: "/experience/:id",
                element: <ExpandedExperience />,
                loader: async ({ params }) => params.id
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "*",
                element: <Navigate to="/about" replace />,
            },
            {
                path: "/",
                element: <Navigate to="/about" replace />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
