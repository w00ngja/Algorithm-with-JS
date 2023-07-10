import React from "react";
import "./App.css";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Video from "./pages/Video";
import VideoDetail from "./pages/VideoDetail";
import NotFound from "./pages/NotFound";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    // 1. Outlet을 사용하기 위해선 페이지를 따로 빼는 게 아니라, children 프로퍼티에 넣어줘야 함
    children: [
      { index: true, element: <Home /> },
      { path: "/videos", element: <Video /> },
      // 2. Param 활용을 위한 하위 페이지 붙이기
      { path: "/videos/:videoId", element: <VideoDetail /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
