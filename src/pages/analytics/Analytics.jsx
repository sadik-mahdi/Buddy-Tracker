import React, { useContext } from "react";
import { CallsContexts } from "../../Context/TimeLineContext";

const AnalyticsPage = () => {
  const { calls } = useContext(CallsContexts);

  const callCount = calls.filter((c) => c.type === "call").length;
  const textCount = calls.filter((c) => c.type === "text").length;
  const videoCount = calls.filter((c) => c.type === "video").length;

  return (
    <div className="my-10 container mx-auto w-9/12">
      <h2 className="text-4xl font-bold mb-8">Friendship Analytics</h2>

      {/* This will become your chart container later */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h3 className="mb-4 font-semibold text-gray-600">
          By Interaction Type
        </h3>

        <div className="text-lg space-y-2">
          <p>Calls: {callCount}</p>
          <p>Texts: {textCount}</p>
          <p>Videos: {videoCount}</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;