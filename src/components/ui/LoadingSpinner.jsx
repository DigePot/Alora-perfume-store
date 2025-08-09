import React from 'react';

const LoadingSpinner = ({ fullScreen = false, size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-6 w-6 border-2',
    medium: 'h-8 w-8 border-4',
    large: 'h-12 w-12 border-4'
  };

  const spinner = (
    <div className={`animate-spin rounded-full border-solid border-t-transparent ${
      sizeClasses[size]
    } border-blue-500`} />
  );

  return fullScreen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      {spinner}
    </div>
  ) : (
    <div className="flex justify-center items-center p-8">
      {spinner}
    </div>
  );
};

export default LoadingSpinner;