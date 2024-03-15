import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { state, addPost } from "./state";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
const { postsData, dialogData, messageData } = state;

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
        element: <Profile postsData={postsData} addPost={addPost} />,
      },
      {
        path: "messages",
        element: <Dialogs dialogData={dialogData} messageData={messageData} />,
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
