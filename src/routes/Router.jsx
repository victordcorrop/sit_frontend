import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.jsx"));

/***** Pages ****/
const Login = lazy(() => import("../views/login.jsx"));
const Item = lazy(() => import("../views/Item.jsx"));
const About = lazy(() => import("../views/About.jsx"));
const Brand = lazy(() => import("../views/Brand.jsx"));
const Model = lazy(() => import("../views/Model.jsx"));
const Alerts = lazy(() => import("../views/ui/Alerts.jsx"));
const Badges = lazy(() => import("../views/ui/Badges.jsx"));
const Buttons = lazy(() => import("../views/ui/Buttons.jsx"));
const Cards = lazy(() => import("../views/ui/Cards.jsx"));
const Grid = lazy(() => import("../views/ui/Grid.jsx"));
const Tables = lazy(() => import("../views/ui/Tables.jsx"));
const Forms = lazy(() => import("../views/Forms.jsx"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs.jsx"));

/*****Routes******/

const ThemeRoutes = [
  { path: "/login", exact: true, element: <Login /> },
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/Item" /> },
      { path: "/item", exact: true, element: <Item /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/brand", exact: true, element: <Brand /> },
      { path: "/model", exact: true, element: <Model /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
