import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/homepage/Homepage";
import Friends from "./pages/timeline/Timeline";
import { router } from "./routes/Routes";
import { RouterProvider } from "react-router/dom";
import FriendProvider from "./Context/FriendProvider";
import TimeLineProvider from "./Context/TimeLineProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendProvider>
      <TimeLineProvider>
        <RouterProvider router={router} />,
      </TimeLineProvider>
    </FriendProvider>
  </StrictMode>,
);
