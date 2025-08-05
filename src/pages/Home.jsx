import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaEye, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

import backgroundVideo from "../assets/background.mp4";
import firstImage from "../assets/first.png";
import secondImage from "../assets/second.png";
import thirdImage from "../assets/third.png";
import fourthImage from "../assets/fourth.png";
import premiumBanner from "../assets/premium.png";
import perfume1 from "../assets/perfume1.png";
import perfume2 from "../assets/perfume2.png";
import perfume3 from "../assets/perfume3.png";
import perfume4 from "../assets/perfume4.png";

import MostSold from "../components/MostSold";
import Footer from "../components/Footer";
import ProductQuickViewModal from "../components/ProductQuickViewModal";
import LikeButton from "../components/LikeButton";
// Import Contexts
import { useCart } from "../context/CartContext"
import { useToast } from "../context/ToastContext"


const collections = [
  { id: 1, title: "Summer Collection", image: firstImage },
  { id: 2, title: "Winter Elegance", image: secondImage },
  { id: 3, title: "Royal Series", image: thirdImage },
  { id: 4, title: "Classic Blend", image: fourthImage },
];

const products = [
  { id: 1, name: "Alora Collection 35", description: "New 150ml and elegant 5ml perfume", price: 199, oldPrice: 359, image: perfume1 },
  { id: 2, name: "Wild Pegasus 150ml", description: "Premium fragrance collection", price: 128, oldPrice: 275, image: perfume2 },
  { id: 3, name: "Brooklyn Pegasus 150ml", description: "Urban inspired scent", price: 128, oldPrice: 275, image: perfume3 },
  { id: 4, name: "Incense Pegasus 150ml", description: "Mystical aromatic blend", price: 128, oldPrice: 275, image: perfume4 },
];

function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
 const [isQuickViewModalOpen, setIsQuickViewModal] = useState(false)
const [selectedProduct, setSelectedProduct] = useState(null)

  const { addToCart } = useCart()
  const { showToast } = useToast()

const openQuickViewModal = (product) => {
  setSelectedProduct(product)
  setIsQuickViewModal(true)
}

const closeQuickViewModal = () => {
  setIsQuickViewModal(false)
  setSelectedProduct(null)
}

const [showScrollToTop, setShowScrollToTop] = useState(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true)
    } else {
      setShowScrollToTop(false)
    }
  }

  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
}, []) 

  const handleAddToCart = (productId, productName) => {
    addToCart(productId)
    showToast(`Added "${productName}" to cart successfully!`, "success")
  }

  return (
    <div className="absolute top-0 left-0 w-full h-screen">
      {/* === Background Video === */}
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

      {/* === Hero Section === */}
      <div className="relative z-20 h-full flex items-center justify-center text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Welcome to Alora
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light leading-relaxed">
            Discover our exquisite collection of luxury fragrances and timeless elegance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl">
              Explore Collection
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* === Main Content === */}
      <div className="relative z-10 bg-white w-full">

        {/* === Collections === */}
        <section className="py-16 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Celebrate with Your Loved Ones</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">Our gift collections</p>
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {collections.map((collection, index) => (
                <Link
                  to={`/collection/${collection.id}`}
                  key={collection.id}
                  className={`relative rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 transform ${
                    hoveredCard === index ? "scale-110 -translate-y-4 shadow-2xl z-20" : "hover:scale-105 hover:-translate-y-2"
                  }`}
                  style={{ width: "250px", height: "250px" }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <img src={collection.image || "/placeholder.svg"} alt={collection.title} className="w-full h-full object-cover" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === Banner === */}
        <section className="mb-16 flex justify-center">
          <Link to="/premium-collection" className="block w-full">
            <div className="h-[600px] w-[95%] max-w-[1700px] relative overflow-hidden rounded-2xl shadow-lg mx-auto">
              <img src={premiumBanner} alt="Luxury Collection Banner" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </Link>
        </section>

        {/* === Products === */}
        <section className="py-16 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Premium Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                onMouseEnter={() => setHoveredProduct(index)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
              <div className="flex flex-col flex-grow">
                <div className="relative overflow-hidden">
                  {/* The image is now inside its own div */}
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* This div holds the new icons */}
                  <div
                    className={`absolute top-4 right-4 flex flex-col gap-2 transition-opacity duration-300 ${
                      hoveredProduct === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {/* === EYE ICON BUTTON === */}
                    <button
                      className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110"
                      onClick={(e) => {
                        e.preventDefault() // This stops the page from navigating away
                        openQuickViewModal(product)
                      }}
                      aria-label="Quick View"
                    >
                      <FaEye className="text-gray-600 hover:text-blue-600" />
                    </button>
                    <LikeButton productId={product.id} />
                  </div>
                </div>
                      {/* Link now only wraps the details, not the whole card */}
                      <Link to={`/product/${product.id}`} className="p-6 flex flex-col flex-grow">
                        <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-red-500 font-bold text-xl">${product.price}</span>
                          <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>
                        </div>
                      </Link>
                    </div>
                    <div className="px-6 pb-6 mt-auto">
                    <button
                      onClick={() => handleAddToCart(product.id, product.name)}
                      className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                    >
                      Add to cart
                    </button>
                  </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Most Sold Section === */}
        <MostSold />

      {/* === Footer === */}
        <Footer />
      </div>
       {isQuickViewModalOpen && <ProductQuickViewModal product={selectedProduct} onClose={closeQuickViewModal} />}

       {/* === SCROLL-TO-TOP BUTTON CODE === */}
    <AnimatePresence>
      {showScrollToTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed bottom-8 right-8 bg-white text-black p-4 rounded-full shadow-lg cursor-pointer z-50 hover:bg-gray-200 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
    </div>
  );
}

// === Footer Component ===

export default Home;