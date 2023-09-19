import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AddJob,
  AllJobs,
  DashboardLayout,
  HomeLayout,
  Landing,
  Login,
  Register,
  Error,
  EditJob,
  Profile,
  Admin,
  Stats,
  DeleteJob,
} from "./pages";

//import actions
import { action as loginAction } from "./pages/userPages/Login";
import { action as registerAction } from "./pages/userPages/Register";
import { action as addJobAction } from "./pages/JobPages/AddJob";
import { action as editJobAction } from "./pages/JobPages/EditJob";
import { action as deleteAction } from "./pages/JobPages/DeleteJob";
import { action as profileAction } from "./pages/userPages/Profile";

//import loaders
import { loader as allJobsLoader } from "./pages/JobPages/AllJobs";
import { loader as editJobLoader } from "./pages/JobPages/EditJob";
import { loader as statsLoader } from "./pages/userPages/Stats";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as adminLoader } from "./pages/userPages/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    // errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: "register", element: <Register />, action: registerAction },
      { path: "login", element: <Login />, action: loginAction },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          { index: true, element: <AddJob />, action: addJobAction },
          { path: "all-jobs", element: <AllJobs />, loader: allJobsLoader },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobAction,
          },
          {
            path: "delete-job/:id",
            element: <DeleteJob />,
            action: deleteAction,
          },
          { path: "stats", element: <Stats />, loader: statsLoader },
          { path: "profile", element: <Profile />, action: profileAction },
          { path: "admin", element: <Admin />, loader: adminLoader },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
