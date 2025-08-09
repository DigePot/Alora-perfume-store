export const mainNavItems = [
  { 
    name: "Home", 
    path: "/",
    description: "Return to homepage"
  },
  { 
    name: "New", 
    path: "/new",
    description: "Latest arrivals and new products"
  },
  { 
    name: "Perfumes", 
    path: "/perfumes",
    description: "Browse all perfumes"
  },
  { 
    name: "Men's Fragrance", 
    path: "/men-fragrance",
    description: "Fragrances for men"
  },
  { 
    name: "Women's Fragrance", 
    path: "/women-fragrance",
    description: "Fragrances for women"
  },
  { 
    name: "Best Sellers", 
    path: "/best-seller",
    description: "Our most popular products"
  },
  { 
    name: "Private Collection", 
    path: "/private-collection",
    description: "Exclusive and premium fragrances"
  },
  { 
    name: "All Products", 
    path: "/all-products",
    description: "View our complete catalog"
  },
  { 
    name: "About", 
    path: "/about",
    description: "Learn more about Alora"
  },
  { 
    name: "Contact", 
    path: "/contact",
    description: "Get in touch with us"
  }
]

// Category-based navigation items
export const categoryNavItems = [
  {
    name: "Shop",
    items: [
      { name: "All Products", path: "/all-products" },
      { name: "New Arrivals", path: "/new" },
      { name: "Best Sellers", path: "/best-seller" },
      { name: "Private Collection", path: "/private-collection" }
    ]
  },
  {
    name: "Categories",
    items: [
      { name: "Men's Fragrance", path: "/men-fragrance" },
      { name: "Women's Fragrance", path: "/women-fragrance" },
      { name: "Perfumes", path: "/perfumes" }
    ]
  },
  {
    name: "Company",
    items: [
      { name: "About Us", path: "/about" },
      { name: "Contact", path: "/contact" }
    ]
  }
]

// Quick access items for mobile
export const quickAccessItems = [
  { name: "🆕 New", path: "/new" },
  { name: "🔥 Best Sellers", path: "/best-seller" },
  { name: "👨 Men", path: "/men-fragrance" },
  { name: "👩 Women", path: "/women-fragrance" }
]

// User menu items
export const userMenuItems = {
  authenticated: [
    { name: "My Profile", path: "/profile", icon: "user" },
    { name: "My Orders", path: "/orders", icon: "bag" },
    { name: "Wishlist", path: "/wishlist", icon: "heart" },
    { name: "Settings", path: "/settings", icon: "cog" }
  ],
  admin: [
    { name: "Admin Panel", path: "/admin/dashboard", icon: "shield" }
  ]
}

// Social links
export const socialLinks = [
  { name: "Facebook", url: "#", icon: "facebook" },
  { name: "Instagram", url: "#", icon: "instagram" },
  { name: "Twitter", url: "#", icon: "twitter" },
  { name: "YouTube", url: "#", icon: "youtube" }
]

// Footer links
export const footerLinks = {
  shop: [
    { name: 'All Products', path: '/all-products' },
    { name: 'New Arrivals', path: '/new' },
    { name: 'Best Sellers', path: '/best-seller' },
    { name: 'Private Collection', path: '/private-collection' }
  ],
  categories: [
    { name: "Men's Fragrance", path: '/men-fragrance' },
    { name: "Women's Fragrance", path: '/women-fragrance' },
    { name: 'Perfumes', path: '/perfumes' }
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Shipping Info', path: '/shipping' },
    { name: 'FAQ', path: '/faq' },
  

  ]
}