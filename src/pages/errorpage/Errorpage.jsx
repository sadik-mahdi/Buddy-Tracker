import React from 'react';
import { Link } from 'react-router';

const Errorpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-6xl font-extrabold text-indigo-600">404</p>
        
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we could not find the page you are looking for. It might have been moved or deleted.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
          >
            Go back home
          </Link>
          
          <a href="#" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;