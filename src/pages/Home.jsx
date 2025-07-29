// src/pages/Home.jsx

import backgroundVideo from "../assets/background.mp4"
import { Link } from "react-router-dom"; 
import { useState } from "react"
import { FaHeart, FaEye } from "react-icons/fa"
import firstImage from "../assets/first.png"
import secondImage from "../assets/second.png"
import thirdImage from "../assets/third.png"
import fourthImage from "../assets/fourth.png"
import fifthImage from "../assets/fifth.png"
import premiumBanner from "../assets/premium.png"
import perfume1 from "../assets/perfume1.png"
import perfume2 from "../assets/perfume2.png"
import perfume3 from "../assets/perfume3.png"
import perfume4 from "../assets/perfume4.png"
import perfume5 from "../assets/perfume5.png"
import perfume6 from "../assets/perfume6.png"
import MostSold from "../components/MostSold";

// Add these data arrays after your imports
const collections = [
  {
    id: 1,
    title: "Summer Collection",
    image: firstImage,
  },
  {
    id: 2,
    title: "Winter Elegance",
    image: secondImage,
  },
  {
    id: 3,
    title: "Royal Series",
    image: thirdImage,
  },
  {
    id: 4,
    title: "Classic Blend",
    image: fourthImage,
  },
]

const products = [
  {
    id: 1,
    name: "Alora Collection 35",
    description: "New 150ml and elegant 5ml perfume",
    price: 199,
    oldPrice: 359,
    image: perfume1,
  },
  {
    id: 2,
    name: "Wild Pegasus 150ml",
    description: "Premium fragrance collection",
    price: 128,
    oldPrice: 275,
    image: perfume2,
  },
  {
    id: 3,
    name: "Brooklyn Pegasus 150ml",
    description: "Urban inspired scent",
    price: 128,
    oldPrice: 275,
    image: perfume3,
  },
  {
    id: 4,
    name: "Incense Pegasus 150ml",
    description: "Mystical aromatic blend",
    price: 128,
    oldPrice: 275,
    image: perfume4,
  },
]
function Home() {
  const [hoveredCard, setHoveredCard] = useState(null)
const [hoveredProduct, setHoveredProduct] = useState(null)
  return (
    // This container holds the video and the content
    <div className="absolute top-0 left-0 w-full h-screen">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Hero Section Content */}
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
      <div className="relative z-10 bg-white w-full">
  {/* Collections Section */}
  <section className="py-16 px-4 sm:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Celebrate with Your Loved Ones</h2>
    <p className="text-center text-gray-600 mb-12 text-lg">Our gift collections</p>

    {/* 5 Collection Cards in a Row */}
    <div className="flex flex-wrap justify-center gap-6 mb-16">
      {collections.map((collection, index) => (
        <Link
          to={`/collection/${collection.id}`} // Adjust path as needed
          key={collection.id}
          className={`relative rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 transform ${
            hoveredCard === index
              ? "scale-110 -translate-y-4 shadow-2xl z-20"
              : "hover:scale-105 hover:-translate-y-2"
          }`}
          style={{ width: "250px", height: "250px" }}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img
            src={collection.image || "/placeholder.svg"}
            alt={collection.title}
            className="w-full h-full object-cover"
          />
        </Link>
      ))}
    </div>
  </div>
</section>

  {/* Full Width Banner */}
 <section className="mb-16 flex justify-center">
  <Link to="/premium-collection" className="block w-full">
    <div className="h-[600px] w-[95%] max-w-[1700px] relative overflow-hidden rounded-2xl shadow-lg mx-auto">
      <img
        src={premiumBanner}
        alt="Luxury Collection Banner"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  </Link>
</section>

  {/* Products Section */}
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
          {/* === Product Image & Info Link === */}
          <Link to={`/product/${product.id}`} className="flex flex-col flex-grow">
            <div className="relative overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Icons */}
              <div
                className={`absolute top-4 right-4 flex flex-col gap-2 transition-opacity duration-300 ${
                  hoveredProduct === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110">
                  <FaEye className="text-gray-600 hover:text-blue-600" />
                </button>
                <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110">
                  <FaHeart className="text-gray-600 hover:text-red-500" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>

              {/* Pricing */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-red-500 font-bold text-xl">${product.price}</span>
                <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>
              </div>
            </div>
          </Link>

          {/* === Add to Cart Button Link === */}
          <Link to={`/checkout/${product.id}`} className="px-6 pb-6 mt-auto">
            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
              Add to cart
            </button>
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>


  {/* Additional Content */}
 <MostSold />

  {/* Full Width Banner */}
 <section className="mb-16 flex justify-center">
  <Link to="/premium-collection" className="block w-full">
    <div className="h-[600px] w-[95%] max-w-[1700px] relative overflow-hidden rounded-2xl shadow-lg mx-auto">
      <img
        src={premiumBanner}
        alt="Luxury Collection Banner"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  </Link>
</section>

 <MostSold />

   {/* Full Width Banner */}
 <section className="mb-16 flex justify-center">
  <Link to="/premium-collection" className="block w-full">
    <div className="h-[600px] w-[95%] max-w-[1700px] relative overflow-hidden rounded-2xl shadow-lg mx-auto">
      <img
        src={premiumBanner}
        alt="Luxury Collection Banner"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  </Link>
</section>

 <MostSold />
</div>
    </div>
  )
}

export default Home