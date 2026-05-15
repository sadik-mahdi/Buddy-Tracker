import React, { useState } from "react";
import { FriendContext } from "./FriendContext";

const FriendProvider = ({ children }) => {
  const [storeCall, setStoreCall] = useState([]);

  const handleCall = (currentCall) => {
    //step 1: store friend id or object
    //step 2: where to store
    //step 3: array or collection
    //step 4: if book exist shew a toast
    //step 5: if not then add book in array or collection

    storeCall.find((friend) => friend.id === currentCall.id);
    setStoreCall([...storeCall, currentCall]);
    alert(`${currentCall.name}'s call is added to timeline`);
    console.log(currentCall, storeCall, "id");
  };

  const data = {
    storeCall,
    setStoreCall,
    handleCall,
  };

  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;
