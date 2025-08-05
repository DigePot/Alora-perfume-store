"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle2, XCircle, QrCode } from "lucide-react" // Using Lucide React icons

const ProductQuickViewModal = ({ product, onClose }) => {
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [quantity, setQuantity] = useState(1)

  if (!product) return null

  const shortDescription =
    product.description.length > 150 ? product.description.substring(0, 150) + "..." : product.description

  const fullDescription = product.description

  const isInStock = true // Placeholder for stock status

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart!`)
    // Implement actual add to cart logic here
    onClose()
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        onClick={onClose} // Close modal when clicking outside
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-auto max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative"
          onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 !bg-white text-gray-900 transition-colors z-10 p-2 rounded-full"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Side: Product Image */}
          <div className="w-full md:w-1/2 p-6 flex items-center justify-center bg-gray-50 rounded-l-xl">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="max-w-full max-h-96 object-contain rounded-lg"
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="w-full md:w-1/2 p-6 flex flex-col">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-gray-600 text-lg mb-4">{product.description}</p> {/* Initial description */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-red-500 font-bold text-3xl">${product.price}</span>
              <span className="text-gray-400 line-through text-lg">${product.oldPrice}</span>
            </div>
            <hr className="border-t border-gray-200 my-4" />
            {/* Stock Status */}
            <div className="flex items-center gap-2 mb-4">
              {isInStock ? (
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
              <span className={`font-semibold ${isInStock ? "text-green-600" : "text-red-600"}`}>
                {isInStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            {/* Full Description with "See More" */}
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                {showFullDescription ? fullDescription : shortDescription}
              </p>
              {fullDescription.length > 150 && (
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="text-blue-600 hover:underline text-sm mt-2"
                >
                  {showFullDescription ? "See Less" : "See More"}
                </button>
              )}
            </div>
            {/* Product Information Card */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Product Information</h4>
              <div className="flex items-center gap-3 text-gray-700 text-sm">
                <QrCode className="w-5 h-5" />
                <span>SKU: {product.id}</span> {/* Using product ID as SKU for now */}
              </div>
              <div className="flex items-center gap-3 text-gray-700 text-sm mt-2">
                <span>Serial No: ALORA-P{product.id.toString().padStart(4, "0")}</span>
              </div>
            </div>
            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 !bg-white text-gray-900 rounded-l-lg"
                >
                  -
                </button>
                <span className="px-4 py-2 text-gray-900 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 !bg-white text-gray-900 rounded-r-lg"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
              >
                Add to cart
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProductQuickViewModal
