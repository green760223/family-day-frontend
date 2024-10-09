import { Navigate, createBrowserRouter } from "react-router-dom"
import SignIn from "../views/signin/SignIn"
import Welcome from "../views/welcome/Welcome"
import Layout from "../layout/LayoutFC"
import { Outlet } from "react-router-dom"
import Activity from "../views/activity/Activity"
import Ticket from "../views/ticket/Ticket"
import Game from "../views/game/Game"

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
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/game",
        element: <Game />,
      },
      {
        path: "/activity",
        element: <Activity />,
      },
      {
        path: "/ticket",
        element: <Ticket />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <Navigate to='/404' />,
  // },
  // {
  //   path: "/404",
  //   element: <NotFound />,
  // },
]

export default createBrowserRouter(router)
