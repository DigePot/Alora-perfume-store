import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Shop, ProductDetails, Cart, Checkout, Login, Register, Profile, OrderHistory } from "./pages"
import Home from "./pages/Home"
import { CartProvider } from "./context/CartContext"
import { AuthProvider } from "./context/AuthContext"
import { ToastProvider } from "./context/ToastContext" // Import ToastProvider
import ProtectedRoute from "./components/ProtectedRoute"
import { useEffect } from "react"

function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/cart") {
      document.body.classList.add("cart-page-active")
    } else {
      document.body.classList.remove("cart-page-active")
    }
    return () => {
      document.body.classList.remove("cart-page-active")
    }
  }, [location.pathname])

  return (
    <AuthProvider>
      <CartProvider>
        <ToastProvider>
          <Navbar />
          <main className="w-full min-h-screen flex flex-col bg-white text-neutral-600 pt-32">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/orders"
                element={
                  <ProtectedRoute>
                    <OrderHistory />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
        </ToastProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
