import React from 'react';
import { Link } from 'react-router';

const BookCard = ({ friend }) => {
  
  const statusBg = {
    "almost due": "bg-[#efad44]",
    "overdue": "bg-[#ef4444]",
    "on-track": "bg-[#244d3f]"
  };

  

  return (
    <Link to={`/friendDetails/${friend.id}`} className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
      <figure className="px-10 pt-10">
        <img
          src={friend.picture}
          alt={friend.name}
          className="rounded-full w-24 h-24 object-cover" 
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{friend.name}</h2>
        <p className='text-gray-800 font-medium'>{friend.days_since_contact}d ago</p>
        
        <div className='flex gap-2 flex-wrap justify-center'>
          {friend.tags.map((tag, ind) => (
            <div key={ind} className='bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold'>
              {tag}
            </div>
          ))}
        </div>

        <div className="card-actions mt-4">
          
          <button className={`text-white px-4 py-1 rounded-full text-sm capitalize ${statusBg[friend.status] || 'bg-gray-500'}`}>
            {friend.status}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;