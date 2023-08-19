import "./App.css";
import {
    RouterProvider,
    createBrowserRouter,
    Navigate
} from "react-router-dom";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navigate to="/login" replace />
        },
        // {
        //     path: "*",
        //     element: <NotFound />
        // },
        // {
        //     path: "404",
        //     element: <NotFound />
        // },
        {
            path: "/login",
            element: <div>Login</div>
        }
    ]);

    return <RouterProvider router={router} />;
}

export default App;
