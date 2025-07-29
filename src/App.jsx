// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Shop, ProductDetails, Cart, Checkout, Login, Register, Profile, OrderHistory } from "./pages"
import Home from "./pages/Home"
import { CartProvider } from "./context/CartContext"
import { AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          {/* Navbar is outside the main scrolling container */}
          <Navbar />
          {/* Added pt-32 to push content below the fixed navbar */}
          <main className="w-full min-h-screen flex flex-col bg-white text-neutral-600 pt-32">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* Private routes */}
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
              {/* Admin routes */}
            </Routes>
            {/* Footer is inside the main tag if you want it to be at the bottom of the content */}
            {/* <Footer /> */}
          </main>
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App