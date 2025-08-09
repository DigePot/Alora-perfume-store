import { AlertTriangle, RefreshCw, Home, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

export default function ErrorFallback({ error, resetErrorBoundary }) {
  const [isReloading, setIsReloading] = useState(false);

  const handleReload = () => {
    setIsReloading(true);
    // Simulate reload delay
    setTimeout(() => {
      if (resetErrorBoundary) {
        resetErrorBoundary();
      } else {
        window.location.reload();
      }
    }, 1000);
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#105484] via-[#105484] to-[#4ca9ea] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#1bcd04] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#4ca9ea] rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-[#1bcd04] rounded-full animate-pulse"></div>

        {/* Main error card */}
        <div className="bg-[#fbf6f0]/95 backdrop-blur-lg border border-[#a3aabc]/30 rounded-3xl p-8 shadow-2xl">
          {/* Error icon with animation */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#f51b16]/20 rounded-full animate-ping"></div>
              <div className="relative bg-[#f51b16] p-4 rounded-full">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Error title */}
          <h1 className="text-2xl font-bold text-[#105484] text-center mb-3">
            Oops! Something went wrong
          </h1>

          {/* Error description */}
          <p className="text-[#a3aabc] text-center mb-6 leading-relaxed">
            We encountered an unexpected error. Don't worry, our team has been notified and we're working on a fix.
          </p>

          {/* Error details (if provided) */}
          {error && (
            <div className="bg-[#105484]/10 border border-[#a3aabc]/20 rounded-xl p-4 mb-6">
              <p className="text-xs text-[#a3aabc] mb-1">Error Details:</p>
              <p className="text-sm text-[#105484] font-mono break-words">
                {error.message || 'Unknown error occurred'}
              </p>
            </div>
          )}

          {/* Action buttons */}
          <div className="space-y-3">
            <button
              onClick={handleReload}
              disabled={isReloading}
              className="w-full bg-gradient-to-r from-[#4ca9ea] to-[#1bcd04] hover:from-[#4ca9ea]/90 hover:to-[#1bcd04]/90 disabled:from-[#a3aabc] disabled:to-[#a3aabc] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 flex items-center justify-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isReloading ? 'animate-spin' : ''}`} />
              {isReloading ? 'Reloading...' : 'Try Again'}
            </button>

            <div className="flex gap-3">
              <button
                onClick={handleGoBack}
                className="flex-1 bg-[#105484]/10 hover:bg-[#105484]/20 border border-[#a3aabc]/30 text-[#105484] font-medium py-2.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Go Back
              </button>
              
              <button
                onClick={handleGoHome}
                className="flex-1 bg-[#105484]/10 hover:bg-[#105484]/20 border border-[#a3aabc]/30 text-[#105484] font-medium py-2.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </button>
            </div>
          </div>

          {/* Support message */}
          <div className="mt-6 pt-6 border-t border-[#a3aabc]/20">
            <p className="text-xs text-[#a3aabc] text-center">
              Need help? Contact our support team at{' '}
              <span className="text-[#4ca9ea]">support@example.com</span>
            </p>
          </div>
        </div>

        {/* Additional info */}
        <p className="text-center text-[#a3aabc] text-xs mt-4">
          Error ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
        </p>
      </div>
    </div>
  );
}