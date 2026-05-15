import React from 'react';

const Banner = () => {
  return (
    <div className="p-20 bg-base-200 container mx-auto">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
          <p className="py-6">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
            relationships that matter most.
          </p>
          <button className="btn btn-primary">+ Add a Friend</button>
        </div>
      </div>
      <div className='flex justify-center gap-10 container mx-auto mt-20' >
        <div className='bg-white w-50 text-center p-10 shadow-md'>
          <h2 className='font-bold text-4xl'>10</h2>
          <p className='font-xl'>Total Friends</p>
        </div>
        <div className='bg-white w-50 text-center p-10 shadow-md'>
          <h2 className='font-bold text-4xl'>3</h2>
          <p className='font-xl'>On Track</p>
        </div>
        <div className='bg-white w-50 text-center p-10 shadow-md'>
          <h2 className='font-bold text-4xl'>6</h2>
          <p className='font-xl'>Need Attention</p>
        </div>
        <div className='bg-white w-50 text-center p-10 shadow-md'>
          <h2 className='font-bold text-4xl'>12</h2>
          <p className='font-xl'>Interaction This Month</p>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;