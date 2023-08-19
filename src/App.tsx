import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Layout from "./modules/Dashboard/Layouts/Layout";
import ProjectManager from "./modules/Dashboard/modules/ProjectManager/ProjectManager";
import CreateProject from "./modules/Dashboard/modules/CreateProject/CreateProject";

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
          path: "my-projects",
          element: <ProjectManager />,
        },
        {
          path: "create-project",
          element: <CreateProject />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
