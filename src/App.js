import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Settings from "./components/Settings/Settings";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        {/* <Dialogs/> */}
        {/* <Profile/> */}
        <Outlet />
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Profile />,
      },
      {
        path: "messages",
        element: <Dialogs />,
      },
      {
        path: "music",
        element: <Music />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export const routing = <RouterProvider router={appRouter} />;
export default App;
