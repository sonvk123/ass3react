import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Component/Home/Home";
import Cart from "./Component/Cart/Cart";
import Checkout from "./Component/checkout/Checkout";
import Detail from "./Component/Detail/Detail";
import Login from "./Component/Login/Login";
import Register from "./Component/Login/Register";
import Shop from "./Component/shop/Shop";
import Root from "./Layout/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/detail/:id", element: <Detail /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
