import { createBrowserRouter } from "react-router";
import { protectedLoader } from "../../../../packages/router/protectedLoader";

import Home from "../pages/home";
import Auth from "../pages/Auth";
import Support from "../pages/cheer";
import View from "../pages/farminglog/view";
import Create from "../pages/farminglog/create";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />, 
  },
  {
    path: "/home",
    loader: protectedLoader,
    element: <Home />,
  },
  {
    path: "/support",
    loader: protectedLoader,
    element: <Support />,
  },
  {
    path: "/farminglog/view",
    loader: protectedLoader,
    element: <View />,
  },
  {
    path: "/farminglog/create",
    loader: protectedLoader,
    element: <Create />,
  },
]);
