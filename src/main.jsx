import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Theme from "./styles/Theme"
import Header from "./components/Header";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
      <Header /> 
      <Outlet /> 
    </>,
    errorElement:<>
      <Header /> 
      <PageNotFound /> 
    </>,
    children: [
      {
        path: "",
        element: <Home />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);