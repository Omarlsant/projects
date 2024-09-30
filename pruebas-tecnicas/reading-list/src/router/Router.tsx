import Layout from "../layout/Layout.tsx";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            }

        ],
    },
]);