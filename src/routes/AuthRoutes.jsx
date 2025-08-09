import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import LoadingSpinner from "../components/ui/LoadingSpinner";

// Update import paths to be relative to the AuthRoutes file location
const SignIn  = lazy(() => import("../pages/auth/Login.jsx"));
const SignUp = lazy(() => import("../pages/auth/Signup.jsx"));
const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword.jsx"));
const ResetPassword = lazy(() => import("../pages/auth/ResetPassword.jsx"));


const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route
          path="signin"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <SignIn />
            </Suspense>
          }
        />
        <Route
          path="signup"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <SignUp />
            </Suspense>
          }
        />
        <Route
          path="forgot-password"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ForgotPassword />
            </Suspense>
          }
        />
        <Route
          path="reset-password"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ResetPassword />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;