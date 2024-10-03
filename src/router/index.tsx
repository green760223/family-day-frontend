import { Navigate, createBrowserRouter } from "react-router-dom"
import SignIn from "../views/signin/SignIn"

export const router = [
  {
    path: "/",
    element: <Navigate to='/login' />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  // {
  //   element: <Layout />,
  //   id: "layout",
  //   children: [
  //     {
  //       path: "/student",
  //       element: <StudentDashboard />,
  //     },
  //     {
  //       path: "/teacher",
  //       element: <TeacherDashboard />,
  //     },
  //     {
  //       path: "/math",
  //       element: <MathList />,
  //     },
  //     {
  //       path: "/history",
  //       element: <HistoryList />,
  //     },
  //     {
  //       path: "/science",
  //       element: <ScienceList />,
  //     },
  //     {
  //       path: "/english",
  //       element: <EnglishList />,
  //     },
  //     {
  //       path: "/computer",
  //       element: <ComputerScienceList />,
  //     },
  //     {
  //       path: "/music",
  //       element: <MusicList />,
  //     },
  //     {
  //       path: "/physical",
  //       element: <PhysicakEducationList />,
  //     },
  //     {
  //       path: "/other",
  //       element: <OtherCourseList />,
  //     },
  //   ],
  // },
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
