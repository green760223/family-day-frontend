import { Navigate, createHashRouter } from "react-router-dom"
import SignIn from "../views/signin/SignIn"
import NotFound from "../views/NotFound"
import Vote from "../views/vote/Vote"
import Home from "../views/home/Home"
import Layout from "../layout/LayoutFC"
import Activity from "../views/activity/Activity"
import Ticket from "../views/ticket/Ticket"
import Map from "../views/map/Map"
import Error403 from "../views/Error403"
import Team from "../views/team/Team"

export const router = [
  {
    path: "/",
    element: <Navigate to='/login' />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    element: <Layout />,
    id: "layout",
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "/activity",
        element: <Activity />,
      },
      {
        path: "/ticket",
        element: <Ticket />,
      },
      {
        path: "/vote",
        element: <Vote />,
      },
      {
        path: "/team",
        element: <Team />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to='/404' />,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "/403",
    element: <Error403 />,
  },
]

export default createHashRouter(router)
