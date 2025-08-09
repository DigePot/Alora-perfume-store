
import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import MainRoutes from "./MainRoutes"
import AuthRoutes from "./AuthRoutes"
import AdminRoutes from "./AdminRoutes"
import NotFound from "../pages/NotFound"

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Routes */}
      <Route path="/*" element={<MainRoutes />} />
      
      {/* Auth Routes */}
     <Route path="/auth/*" element={<AuthRoutes />} />
      
      {/* Admin Routes */}
      <Route path="/admin/*" element={<AdminRoutes />} />
      
      {/* Redirect old routes for backwards compatibility */}
      <Route path="/signin" element={<Navigate to="/auth/signin" replace />} />
      <Route path="/signup" element={<Navigate to="/auth/signup" replace />} />
      
      {/* 404 Not Found */}
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}

export default AppRoutes

