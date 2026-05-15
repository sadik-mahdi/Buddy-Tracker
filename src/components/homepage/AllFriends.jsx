import React, { use } from 'react';
import FriendCard from '../ui/FriendCard';

const friendsPromise = fetch("/friends.json").then((res)=> res.json())

const Allfriends = () => {

  const friends = use(friendsPromise);
  console.log(friends,'friends');

  return <div className='mx-12 container mx-auto'>
      <h2 className='font-bold text-3xl text-left mb-4'>Your Friends</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {
  friends.map((friend,ind) => {
    return (
      <FriendCard key={ind} friend={friend} />
    );
  })
}  
</div>

  </div>
};

export default Allfriends;