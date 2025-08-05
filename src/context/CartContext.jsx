"use client"

import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { products as allProducts } from "../data/homeData" // Import all products

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize cart from localStorage
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cartItems")
      return savedCart ? JSON.parse(savedCart) : []
    }
    return []
  })

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }
  }, [cartItems])

  const addToCart = useCallback(
    (productId) => {
      const existingItemIndex = cartItems.findIndex((item) => item.product.id === productId)
      const productToAdd = allProducts.find((p) => p.id === productId)

      if (!productToAdd) {
        console.error(`Product with ID ${productId} not found.`)
        return
      }

      if (existingItemIndex > -1) {
        // Item already in cart, increase quantity
        const updatedCart = cartItems.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item,
        )
        setCartItems(updatedCart)
      } else {
        // Add new item to cart
        setCartItems([...cartItems, { product: productToAdd, quantity: 1 }])
      }
    },
    [cartItems],
  )

  const removeFromCart = useCallback(
    (productId) => {
      setCartItems(cartItems.filter((item) => item.product.id !== productId))
    },
    [cartItems],
  )

  const updateQuantity = useCallback(
    (productId, newQuantity) => {
      if (newQuantity <= 0) {
        removeFromCart(productId)
        return
      }
      setCartItems(cartItems.map((item) => (item.product.id === productId ? { ...item, quantity: newQuantity } : item)))
    },
    [cartItems, removeFromCart],
  )

  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0)

  const cartTotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartItemCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
