import React, { useContext } from "react";
import { CallsContexts } from "../../Context/TimeLineContext";
import { MdOutlineTextsms, MdOutlineWifiCalling3 } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";

const TimeLine = () => {
  const { calls } = useContext(CallsContexts);
  const [filter, setFilter] = React.useState("all");

  const filteredCalls =
    filter === "all"
      ? calls
      : calls.filter((c) => c.type === filter);

  return (
    <div className="my-10 container w-9/11 mx-auto ">
      <h2 className="font-bold text-4xl mb-10">Timeline</h2>

      {/* FILTER BUTTONS */}
      <div className="flex gap-3 mb-6">
        <button onClick={() => setFilter("all")} className="btn btn-sm">
          All
        </button>

        <button onClick={() => setFilter("call")} className="btn btn-sm">
          Call
        </button>

        <button onClick={() => setFilter("text")} className="btn btn-sm">
          Text
        </button>

        <button onClick={() => setFilter("video")} className="btn btn-sm">
          Video
        </button>
      </div>

      {/* TIMELINE LIST */}
      <div className="space-y-5">
        {filteredCalls.map((call, ind) => {
          return (
            <div
              key={ind}
              className="text-left container mx-auto border-none bg-white shadow-xl p-3 rounded-lg"
            >
              <h2 className="font-bold text-green-700 flex items-center gap-2">
                {call.type === "call" && <MdOutlineWifiCalling3 />}
                {call.type === "text" && <MdOutlineTextsms />}
                {call.type === "video" && <IoVideocamOutline />}

                <span>
                  {call.type === "call"
                    ? "Call"
                    : call.type === "text"
                    ? "Text"
                    : "Video"}
                </span>

                <span> with {call.name}</span>
              </h2>

              <p>{call.next_due_date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeLine;