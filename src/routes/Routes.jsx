import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Friends from "../pages/timeline/Timeline";
import Errorpage from "../pages/errorpage/Errorpage";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import TimeLine from "../pages/timeline/Timeline";
import AnalyticsPage from "../pages/analytics/Analytics";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: "true",
        element: <Homepage></Homepage>,
      },
      {
        path : "/timeline",
        element : <TimeLine/>,
      },
      {
        path : "/analytics",
        element : <AnalyticsPage/>,
      },
      {
        path: "/friendDetails/:id",
        Component: FriendDetails,
        loader: () => fetch("/friends.json"),
      },
    ],
    errorElement: <Errorpage></Errorpage>,
  },
]);
