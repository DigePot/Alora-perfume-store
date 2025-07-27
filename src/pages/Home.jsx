import React from "react";
import backgroundVideo from "../assets/background.mp4";

const giftSets = [
  { id: 1, title: "Gift Set 1", image: "/images/gift1.jpg" },
  { id: 2, title: "Gift Set 2", image: "/images/gift2.jpg" },
  { id: 3, title: "Gift Set 3", image: "/images/gift3.jpg" },
  { id: 4, title: "Gift Set 4", image: "/images/gift4.jpg" },
  { id: 5, title: "Gift Set 5", image: "/images/gift5.jpg" },
  { id: 6, title: "Gift Set 6", image: "/images/gift6.jpg" },
];

const bestSellers = [
  {
    id: 1,
    title: "Pink Arwokat",
    volume: "200 ml",
    price: 130,
    oldPrice: 499,
    inStock: false,
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    title: "Miss Qurais",
    volume: "100 ml - Higher Concentration",
    price: 149,
    oldPrice: 199,
    inStock: false,
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    title: "Miss Arrogate",
    volume: "200 ml",
    price: 129,
    oldPrice: 499,
    inStock: true,
    image: "/images/product3.jpg",
  },
  {
    id: 4,
    title: "Arrogate Comete",
    volume: "200 ml - Best Seller",
    price: 149,
    oldPrice: 499,
    inStock: true,
    image: "/images/product4.jpg",
  },
  {
    id: 5,
    title: "Frankel Imagination Intense",
    volume: "200 ml",
    price: 129,
    oldPrice: 349,
    inStock: true,
    image: "/images/product5.jpg",
  },
  {
    id: 6,
    title: "Gris Eric",
    volume: "200 ml - Best Seller",
    price: 129,
    oldPrice: 245,
    inStock: true,
    image: "/images/product6.jpg",
  },
];

export default function Home() {
  return (
    <div className="relative w-screen min-h-screen font-sans text-black bg-white selection:bg-blue-600 selection:text-white flex flex-col">
      {/* Hero Section with Video */}
      <header className="relative w-full h-[70vh] max-h-[600px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover brightness-90 z-0"
          aria-hidden="true"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/30 to-black/60 backdrop-blur-sm z-10 pointer-events-none" />

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 sm:px-12 lg:px-20 text-white">
          <h1
            className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-xl"
            tabIndex={0}
          >
            Welcome to Alora
          </h1>
          <p
            className="text-lg sm:text-2xl max-w-3xl mb-12 font-light leading-relaxed"
            tabIndex={0}
          >
            Discover our exquisite collection of luxury fragrances and timeless elegance.
          </p>
          <nav
            className="flex flex-col sm:flex-row gap-6 justify-center"
            aria-label="Hero action buttons"
          >
            <button
              type="button"
              className="px-12 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-blue-700 hover:to-cyan-800 text-white font-semibold rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500"
              aria-label="Explore collection"
            >
              Explore Collection
            </button>
            <button
              type="button"
              className="px-12 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-full border border-white/40 shadow-sm transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/60"
              aria-label="Learn more about us"
            >
              Learn More
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-12 flex-grow">
        {/* Gift Sets */}
        <section className="py-12" aria-labelledby="giftsets-heading">
          <h2
            id="giftsets-heading"
            className="text-4xl font-bold text-center mb-6 text-black tracking-wide"
          >
            Celebrate with Your Loved Ones
          </h2>
          <p className="text-center text-gray-700 mb-10 text-lg max-w-xl mx-auto">
            Explore our elegant gift sets, perfect for any occasion.
          </p>

          <ul
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8"
            role="list"
          >
            {giftSets.map(({ id, title, image }) => (
              <li
                key={id}
                className="bg-gray-100 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 focus-within:ring-4 focus-within:ring-cyan-600"
                tabIndex={0}
                aria-label={title}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-40 object-cover rounded-t-xl"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-3 text-center text-gray-900 text-sm font-medium select-none">
                  {title}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Best Sellers */}
        <section className="py-12" aria-labelledby="bestsellers-heading">
          <h2
            id="bestsellers-heading"
            className="text-4xl font-bold text-center mb-10 text-black tracking-wide"
          >
            Best Sellers
          </h2>

          <ul
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8"
            role="list"
          >
            {bestSellers.map(
              ({ id, title, volume, price, oldPrice, inStock, image }) => (
                <li
                  key={id}
                  className="bg-gray-100 rounded-xl p-5 flex flex-col items-center shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer focus-within:ring-4 focus-within:ring-cyan-600"
                  tabIndex={0}
                  aria-label={`${title} ${inStock ? "in stock" : "out of stock"}`}
                >
                  <div className="relative w-full h-44 mb-5">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-contain rounded-lg"
                      loading="lazy"
                      decoding="async"
                    />
                    {!inStock && (
                      <span
                        className="absolute top-3 left-3 bg-red-600 text-xs px-3 py-1 rounded-full font-semibold text-white select-none"
                        aria-label="Out of Stock"
                      >
                        Out of Stock
                      </span>
                    )}
                    <span
                      className="absolute top-3 right-3 bg-cyan-700 text-xs px-3 py-1 rounded-full font-semibold text-white select-none"
                      aria-label="Best Seller"
                    >
                      Best Seller
                    </span>
                  </div>

                  <h3 className="text-gray-900 font-semibold text-center text-lg">{title}</h3>
                  <p className="text-gray-700 text-sm mt-1">{volume}</p>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-gray-900 font-bold text-xl">${price}</span>
                    {oldPrice && (
                      <span className="line-through text-gray-500 text-sm">
                        ${oldPrice}
                      </span>
                    )}
                  </div>

                  <button
                    disabled={!inStock}
                    className={`mt-5 px-8 py-3 rounded-full font-semibold transition-all duration-300
                    ${
                      inStock
                        ? "bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-blue-700 hover:to-cyan-800 text-white cursor-pointer shadow-lg focus:outline-none focus:ring-4 focus:ring-cyan-500"
                        : "bg-gray-400 cursor-not-allowed text-gray-700"
                    }`}
                    aria-disabled={!inStock}
                    aria-label={inStock ? `Add ${title} to cart` : `${title} is out of stock`}
                  >
                    {inStock ? "Add to Cart" : "Out of Stock"}
                  </button>
                </li>
              )
            )}
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10 px-6 text-center select-none mt-auto rounded-t-lg shadow-inner">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-sm tracking-wide">
            &copy; {new Date().getFullYear()} Alora Luxury Fragrances. All rights reserved.
          </p>
          <p className="text-xs italic tracking-wide">
            Crafted with <span aria-label="love" role="img">❤️</span> to bring timeless elegance to your senses.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            {/* Facebook */}
            <a
              href="https://facebook.com/AloraFragrances"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.675 0h-21.35C.596 0 0 .592 0 1.32v21.36c0 .728.596 1.32 1.325 1.32H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.142v3.24l-1.918.001c-1.505 0-1.797.716-1.797 1.765v2.317h3.59l-.467 3.622h-3.123V24h6.116c.729 0 1.325-.592 1.325-1.32V1.32c0-.728-.596-1.32-1.325-1.32z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/AloraFragrances"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 4.557a9.91 9.91 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.863 9.863 0 01-3.127 1.196 4.916 4.916 0 00-8.38 4.482A13.939 13.939 0 011.671 3.15a4.916 4.916 0 001.523 6.556 4.897 4.897 0 01-2.228-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.919 4.919 0 004.59 3.416A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.209c9.057 0 14.01-7.513 14.01-14.034 0-.214-.005-.426-.014-.636A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/AloraFragrances"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.057 2.003.25 2.474.415a4.92 4.92 0 011.675 1.045 4.92 4.92 0 011.045 1.675c.165.471.358 1.268.415 2.474.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.057 1.206-.25 2.003-.415 2.474a4.922 4.922 0 01-1.045 1.675 4.922 4.922 0 01-1.675 1.045c-.471.165-1.268.358-2.474.415-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.057-2.003-.25-2.474-.415a4.92 4.92 0 01-1.675-1.045 4.92 4.92 0 01-1.045-1.675c-.165-.471-.358-1.268-.415-2.474C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.057-1.206.25-2.003.415-2.474a4.92 4.92 0 011.045-1.675 4.92 4.92 0 011.675-1.045c.471-.165 1.268-.358 2.474-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.013 7.052.072 5.766.13 4.679.322 3.756.637c-.976.34-1.802.794-2.627 1.618A6.68 6.68 0 00.637 3.756c-.315.923-.507 2.01-.565 3.296C.013 8.332 0 8.736 0 12c0 3.264.013 3.668.072 4.948.058 1.286.25 2.373.565 3.296.34.976.794 1.802 1.618 2.627a6.682 6.682 0 002.627 1.618c.923.315 2.01.507 3.296.565 1.28.059 1.684.072 4.948.072s3.668-.013 4.948-.072c1.286-.058 2.373-.25 3.296-.565a6.684 6.684 0 002.627-1.618 6.683 6.683 0 001.618-2.627c.315-.923.507-2.01.565-3.296.059-1.28.072-1.684.072-4.948s-.013-3.668-.072-4.948c-.058-1.286-.25-2.373-.565-3.296a6.683 6.683 0 00-1.618-2.627 6.683 6.683 0 00-2.627-1.618c-.923-.315-2.01-.507-3.296-.565C15.668.013 15.264 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
