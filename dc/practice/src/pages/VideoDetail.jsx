import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  // App.js에서 명시한 하위 주소 아이디로 지정됨
  const { videoId } = useParams();
  return <div>VideoDetail : {videoId}</div>;
}
