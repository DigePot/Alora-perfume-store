import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../assets/alora_logo.png';

const AuthLayout = ({ title }) => {
  console.log('AuthLayout rendering');

  return (
    <div className="min-h-screen bg-[#fbf6f0] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <img src={Logo} alt="Alora Logo" className="h-16 w-auto" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-[#105484]">
          {title}
        </h2>
        <p className="mt-2 text-center text-sm text-[#105484]/90">
          Welcome to Alora Fragrances
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10 border border-[#4ca9ea]/20 text-[#105484]">
        
          <div className="text-current"> 
            <Outlet />
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm">
        <Link 
  to="/" 
  className="font-medium !text-[#0a3657] hover:!text-[#08324f] flex items-center justify-center"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
  </svg>
  Back to Home
</Link>

      </div>
    </div>
  );
};

export default AuthLayout;