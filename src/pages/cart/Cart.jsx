"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaEye, FaTrashAlt, FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa"
import { QrCode, ShieldCheck } from "lucide-react"
import { useCart } from "../context/CartContext"
import { useToast } from "../context/ToastContext"
import Footer from "../components/Footer"
import ProductQuickViewModal from "../components/ProductQuickViewModal"
import LikeButton from "../components/ui/LikeButton"
import { products as allProducts } from "../data/homeData"

function Cart() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart()
  const { showToast } = useToast()
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const [isQuickViewModalOpen, setIsQuickViewModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleIncreaseQuantity = (productId, currentQuantity) => {
    updateQuantity(productId, currentQuantity + 1)
    showToast("Cart updated successfully!", "success")
  }

  const handleDecreaseQuantity = (productId, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1)
      showToast("Cart updated successfully!", "success")
    } else {
      handleRemoveItem(productId)
    }
  }

  const handleRemoveItem = (productId) => {
    removeFromCart(productId)
    showToast("Item removed from cart!", "error")
  }

  const openQuickViewModal = (product) => {
    setSelectedProduct(product)
    setIsQuickViewModal(true)
  }

  const closeQuickViewModal = () => {
    setIsQuickViewModal(false)
    setSelectedProduct(null)
  }

  const recommendedProducts = allProducts.filter((p) => !cartItems.some((item) => item.product.id === p.id)).slice(0, 5)

  const handleAddToCartFromRecommendation = (product) => {
    updateQuantity(product.id, 1)
    showToast(`Added "${product.name}" to cart successfully!`, "success")
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs -- FIX: Text color updated to black */}
        <div className="text-sm text-gray-800 mb-8">
          <Link to="/" className="hover:underline text-gray-800">
            Home
          </Link>
          <span className="mx-2">{">"}</span>
          <span className="font-semibold">Cart</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">Your Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
            {cartItems.length === 0 ? (
              // ENHANCEMENT: Improved empty cart state
              <div className="text-center py-10">
                <p className="text-gray-600 text-lg mb-6">Your cart is empty. Start shopping!</p>
                <Link to="/shop" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex items-center border-b pb-4 last:border-b-0 last:pb-0">
                    <img src={item.product.image || "/placeholder.svg"} alt={item.product.name} className="w-24 h-24 object-cover rounded-md mr-6 shadow-sm"/>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg text-gray-800">{item.product.name}</h3>
                      <p className="text-gray-600 text-sm">{item.product.description}</p>
                      <p className="text-red-500 font-bold text-xl mt-2">${item.product.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-4 ml-auto">
                      {/* FIX: Quantity buttons styled with white background and black text */}
                      <div className="flex items-center border border-gray-300 rounded-md">
                       <button
                        onClick={() => handleDecreaseQuantity(item.product.id, item.quantity)}
                        className="px-3 py-1 !bg-white text-gray-900 hover:bg-gray-100 rounded-l-md"
                        aria-label="Decrease quantity"
                        >
                          -
                        </button>

                        <span className="px-4 py-1 border-x border-gray-300 text-gray-800 font-medium">{item.quantity}</span>
                        <button
                        onClick={() => handleIncreaseQuantity(item.product.id, item.quantity)}
                        className="px-3 py-1 !bg-white text-gray-900 hover:bg-gray-100 rounded-r-md"
                        aria-label="Increase quantity"
                        >
                            +
                      </button>
                      </div>
                      <button onClick={() => handleRemoveItem(item.product.id)} className="!bg-white text-gray-900 transition-colors" aria-label="Remove item">
                        <FaTrashAlt className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary Section -- NEW: Entire section enhanced */}
          <div className="lg:col-span-1 bg-white p-8 rounded-lg shadow-md h-fit sticky top-28">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Order Summary</h2>

            {/* NEW: Itemized list in summary */}
            <div className="space-y-3 mb-6">
              {cartItems.map(item => (
                <div key={item.product.id} className="flex justify-between items-center text-sm text-gray-600">
                  <span>{item.product.name} x{item.quantity}</span>
                  <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-4 text-gray-700 border-t pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">FREE</span>
              </div>
              <div className="flex justify-between font-bold text-xl border-t pt-4 mt-4">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* NEW: Digital Receipt Info with QR Code & Serial */}
            {cartItems.length > 0 && (
              <div className="mt-6 border-t pt-4">
                <h3 className="font-semibold text-gray-700 mb-3">Digital Receipt Information</h3>
                <div className="space-y-3">
                  {cartItems.map(item => (
                    <div key={`receipt-${item.product.id}`} className="flex items-start gap-3 text-xs text-gray-500">
                      <QrCode className="w-4 h-4 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-gray-600">{item.product.name}</p>
                        <p>Serial: ALORA-P{item.product.id.toString().padStart(4, "0")}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FIX: Changed button to a Link */}
            <Link to="/checkout" className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-8">
              Proceed to Checkout
            </Link>

            {/* NEW: Trust badges */}
            <div className="mt-6">
              <div className="flex justify-center items-center gap-2 text-sm text-green-700">
                <ShieldCheck className="w-5 h-5"/>
                <span>Secure SSL Checkout</span>
              </div>
              <div className="flex justify-center items-center gap-4 mt-4 text-2xl text-gray-400">
                <FaCcVisa />
                <FaCcMastercard />
                <FaCcAmex />
              </div>
            </div>
          </div>
        </div>

        {/* You Might Also Like Section */}
        {recommendedProducts.length > 0 && (
          <section className="py-24">
            <div className="max-w-7xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">You Might Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {recommendedProducts.map((product, index) => (
                  <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col h-full" onMouseEnter={() => setHoveredProduct(index)} onMouseLeave={() => setHoveredProduct(null)}>
                    <div className="flex flex-col flex-grow">
                      <div className="relative overflow-hidden">
                        <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"/>
                        <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-opacity duration-300 ${hoveredProduct === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                          <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110" onClick={(e) => { e.preventDefault(); openQuickViewModal(product); }} aria-label="Quick View">
                            <FaEye className="text-gray-600 hover:text-blue-600" />
                          </button>
                          <LikeButton productId={product.id} />
                        </div>
                      </div>
                      <Link to={`/product/${product.id}`} className="p-4 flex flex-col flex-grow">
                        <h3 className="font-bold text-md text-gray-800 mb-1">{product.name}</h3>
                        <p className="text-gray-600 text-xs mb-2 flex-grow">{product.description}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-red-500 font-bold text-lg">${product.price.toFixed(2)}</span>
                          <span className="text-gray-400 line-through text-xs">${product.oldPrice.toFixed(2)}</span>
                        </div>
                      </Link>
                    </div>
                    <div className="px-4 pb-4 mt-auto">
                      <button onClick={() => handleAddToCartFromRecommendation(product)} className="w-full bg-black text-white py-2 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors duration-300">
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
      {isQuickViewModalOpen && <ProductQuickViewModal product={selectedProduct} onClose={closeQuickViewModal} />}
    </div>
  )
}

export default Cart;