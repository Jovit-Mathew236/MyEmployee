import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Layout from "./modules/Dashboard/Layouts/Layout";
import ProjectManager from "./modules/Dashboard/modules/ProjectManager/ProjectManager";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element: <div>Login</div>,
    },
    {
      path: "/dashboard",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <div>Dashboard</div>,
        },
        {
          path: "My-Projects",
          element: <ProjectManager />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
