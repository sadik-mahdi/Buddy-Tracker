import React, { useContext } from "react";
import { CallsContexts } from "../../Context/TimeLineContext";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const AnalyticsPage = () => {
  const { calls } = useContext(CallsContexts);

  const callCount = calls.filter((c) => c.type === "call").length;
  const textCount = calls.filter((c) => c.type === "text").length;
  const videoCount = calls.filter((c) => c.type === "video").length;

  const chartData = [
    { name: "Call", value: callCount },
    { name: "Text", value: textCount },
    { name: "Video", value: videoCount },
  ];

  const COLORS = ["#1f5b4f", "#7c3aed", "#34a853"];

  return (
    <div className="my-10 container mx-auto w-9/12">
      <h2 className="text-4xl font-bold mb-8">Friendship Analytics</h2>

      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h3 className="mb-4 font-semibold text-gray-600">
          By Interaction Type
        </h3>

        <div className="w-full h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
