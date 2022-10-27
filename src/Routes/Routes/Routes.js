import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../../pages/Blog/Blog";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import NotFound from "../../pages/Notfound/NotFound";
import Enroll from "../../pages/Other/Enroll/Enroll";
import Register from "../../pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        loader: () =>
          fetch(
            "https://b610-lerning-platform-server-side-atherbiswas.vercel.app/courses"
          ),
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        loader: ({ params }) =>
          fetch(
            `https://b610-lerning-platform-server-side-atherbiswas.vercel.app/courses/${params.id}`
          ),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "enroll",
        element: (
          <PrivateRoutes>
            <Enroll></Enroll>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
