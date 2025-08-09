import React, { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import AdminLayout from "../layouts/AdminLayout"
import LoadingSpinner from "../components/ui/LoadingSpinner"
import ProtectedRoute from "./ProtectedRoute"

// Lazy-loaded admin pages
const Dashboard = lazy(() => import("../pages/admin/Dashboard "))
const ManageOrders = lazy(() => import("../pages/admin/Orders"))
const ManageProducts = lazy(() => import("../pages/admin/Products"))


const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/*" element={
        <ProtectedRoute requiredRole="admin">
          <AdminLayout>
            <Suspense fallback={<LoadingSpinner message="Loading admin panel..." />}>
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="orders" element={<ManageOrders />} />
                <Route path="products" element={<ManageProducts />} />
      
              </Routes>
            </Suspense>
          </AdminLayout>
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default AdminRoutes
