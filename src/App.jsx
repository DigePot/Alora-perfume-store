
// src/App.jsx
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"
import AppRoutes from "./routes/AppRoutes"
import ErrorFallback from "./utils/ErrorFallback"
import { CartProvider } from "./context/CartContext"
import { AuthProvider } from "./context/AuthContext"
import { ToastProvider } from "./context/ToastContext"


function App() {
  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error('App Error:', error, errorInfo)
      }}
    >
    <AuthProvider>
    <CartProvider>
    <ToastProvider>
    <div>
      <AppRoutes />
    </div>
    </ToastProvider>
   </CartProvider>
   </AuthProvider>

    </ErrorBoundary>
  )
}

export default App