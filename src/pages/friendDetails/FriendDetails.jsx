import React, { useContext } from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms, MdOutlineWifiCalling3 } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import { FriendContext } from "../../Context/FriendContext";
import { CallsContexts } from "../../Context/TimeLineContext";
import { toast } from "react-toastify";

const FriendDetails = () => {
  const { id: paramsId } = useParams();
  const friends = useLoaderData();

  const expectedFriend = friends.find(
    (friend) => friend.id === Number(paramsId),
  );

  const {calls, setCalls} = useContext(CallsContexts);
  
  const handleCalls = () => {
    setCalls([...calls, { ...expectedFriend, type: "call" }]);
    toast("Call is added");
  };

  const handleText = () => {
    setCalls([...calls, { ...expectedFriend, type: "text" }]);
    toast("Text is added");
  };
  
  const handleVideo = () => {
    setCalls([...calls, { ...expectedFriend, type: "video" }]);
    toast("Video is added");
  };

  return (
    <div className="card lg:card-side bg-base-200 shadow-sm min-h-125 p-6 gap-6">
      <figure className="flex-col text-center space-y-6 lg:w-1/3">
        <div className="bg-white p-6 w-full shadow-lg rounded-2xl space-y-3">
          <img
            className="rounded-full w-24 h-24 mx-auto object-cover border-4 border-white shadow-md"
            src={expectedFriend.picture}
            alt={expectedFriend.name}
          />
          <h2 className="text-2xl font-bold text-gray-800">
            {expectedFriend.name}
          </h2>
          <p className="bg-red-500 w-fit px-4 mx-auto rounded-full text-white text-sm py-1 capitalize">
            {expectedFriend.status}
          </p>

          <div className="flex gap-2 justify-center flex-wrap">
            {expectedFriend.tags?.map((tag, ind) => (
              <span
                key={ind}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-[#64748b] italic">"{expectedFriend.bio}"</h2>
          <p className="text-[#64748b] text-sm">{expectedFriend.email}</p>
        </div>
        <div className="space-y-2 w-full text-[#1f2937]">
          <button className="w-full bg-white border border-gray-300 p-3 rounded-lg font-bold hover:bg-gray-50 transition-colors">
            Snooze 2 weeks
          </button>
          <button className="w-full bg-white border border-gray-300 p-3 rounded-lg font-bold hover:bg-gray-50 transition-colors">
            Archive
          </button>
          <button className="w-full bg-white border border-gray-300 p-3 rounded-lg font-bold text-red-500 hover:bg-red-50 transition-colors">
            Delete
          </button>
        </div>
      </figure>
      <div className="card-body p-0 lg:w-2/3 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="font-bold text-4xl text-[#244d3f]">
              {expectedFriend.days_since_contact}
            </h2>
            <span className="text-gray-500 text-sm font-medium">
              Days Since Contact
            </span>
          </div>
          <div className="text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="font-bold text-4xl text-[#244d3f]">
              {expectedFriend.goal}
            </h2>
            <span className="text-gray-500 text-sm font-medium">
              Goal (days)
            </span>
          </div>
          <div className="text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="font-bold text-3xl text-[#244d3f]">
              {expectedFriend.next_due_date}
            </h2>
            <span className="text-gray-500 text-sm font-medium">Next Due</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b border-gray-50">
            <span className="text-[#244d3f] text-xl font-bold">
              Relationship Goal
            </span>
            <button className="btn btn-sm btn-outline btn-accent">Edit</button>
          </div>
          <div className="p-6">
            <h2 className="text-gray-600">
              Connect Every{" "}
              <span className="font-bold text-[#1f2937]">
                {expectedFriend.goal} days
              </span>
            </h2>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-green-700 font-bold text-lg mb-4">
            Quick Check In
          </h2>

          <div className="flex gap-4 justify-around">

            <button
              className="flex flex-col items-center justify-center gap-2 py-6 px-4 w-full rounded-xl border border-gray-200 hover:bg-green-50 hover:border-green-200 text-gray-400 hover:text-green-600 font-bold transition-all group"
              onClick={handleCalls}
            >
              <MdOutlineWifiCalling3
                size={32}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-xl">Call</span>
            </button>

            <button
              onClick={handleText}
              className="flex flex-col items-center justify-center gap-2 py-6 px-4 w-full rounded-xl border border-gray-200 hover:bg-green-50 hover:border-green-200 text-gray-400 hover:text-green-600 font-bold transition-all group"
            >
              <MdOutlineTextsms size={32} />
              <span className="text-xl">Text</span>
            </button>

            <button
              onClick={handleVideo}
              className="flex flex-col items-center justify-center gap-2 py-6 px-4 w-full rounded-xl border border-gray-200 hover:bg-green-50 hover:border-green-200 text-gray-400 hover:text-green-600 font-bold transition-all group"
            >
              <IoVideocamOutline size={32} />
              <span className="text-xl">Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FriendDetails;
