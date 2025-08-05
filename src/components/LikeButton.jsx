"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaHeart } from "react-icons/fa"

const LikeButton = ({ productId }) => {
  // This state would ideally be managed globally (e.g., Redux, Context)
  // to persist likes across sessions or pages. For this example, it's local.
  const [isLiked, setIsLiked] = useState(false)
  const [showPopUpHeart, setShowPopUpHeart] = useState(false)

  const handleLikeToggle = (e) => {
    e.stopPropagation() // Prevent triggering parent onClick/Link
    e.preventDefault() // Prevent default button behavior if any

    setIsLiked((prev) => !prev)
    if (!isLiked) {
      // Only show pop-up if it's becoming liked
      setShowPopUpHeart(true)
      setTimeout(() => setShowPopUpHeart(false), 1000) // Hide pop-up after 1 second
    }
  }

  return (
    <div className="relative">
      <button
        className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110"
        onClick={handleLikeToggle}
        aria-label="Add to Wishlist"
      >
        <FaHeart className={isLiked ? "text-red-500" : "text-gray-600 hover:text-red-500"} />
      </button>
      <AnimatePresence>
        {showPopUpHeart && (
          <motion.div
            initial={{ opacity: 1, scale: 0.5, y: 0 }}
            animate={{ opacity: 0, scale: 1.5, y: -30 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <FaHeart className="text-red-500" size={40} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LikeButton
