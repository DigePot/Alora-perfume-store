import React, { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import LoadingSpinner from "../components/ui/LoadingSpinner"

const Home = lazy(() => import("../pages/home/Home"))
const NewPage = lazy(() => import("../pages/NewPage"))
const Perfumes = lazy(() => import("../pages/product/PerfumesPage"))
const MenFragrance = lazy(() => import("../pages/product/MenFragrancePage"))
const WomenFragrance = lazy(() => import("../pages/product/WomenFragrancePage"))
const BestSeller = lazy(() => import("../pages/product/BestSellerPage"))
const PrivateCollection = lazy(() => import("../pages/product/PrivateCollectionPage"))
const AllProducts = lazy(() => import("../pages/product/AllProductsPage"))
const Cart = lazy(() => import("../pages/cart/Cart"))

const MainRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner message="Loading page..." />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} /> 
          <Route path="cart" element={<Cart />} />
          <Route path="new" element={<NewPage />} />
          <Route path="perfumes" element={<Perfumes />} />
          <Route path="men-fragrance" element={<MenFragrance />} />
          <Route path="women-fragrance" element={<WomenFragrance />} />
          <Route path="best-seller" element={<BestSeller />} />
          <Route path="private-collection" element={<PrivateCollection />} />
          <Route path="all-products" element={<AllProducts />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default MainRoutes
