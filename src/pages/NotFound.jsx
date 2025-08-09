import { Home } from 'lucide-react';

export default function NotFound() {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center">
        {/* 404 Number */}
        <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
        
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 mb-8 max-w-md">
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        {/* Home Button */}
        <button
          onClick={handleGoHome}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
        >
          <Home className="w-5 h-5" />
          Go to Home
        </button>
      </div>
    </div>
  );
}