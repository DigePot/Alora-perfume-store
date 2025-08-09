"use client"

import { useEffect, useState } from "react"
import { CheckCircle } from "lucide-react" // Using Lucide React for icons

const ToastMessage = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 5000 // 5 seconds
    const intervalTime = 50 // Update every 50ms
    const startTime = Date.now()

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = (elapsed / duration) * 100
      setProgress(newProgress)

      if (elapsed >= duration) {
        clearInterval(timer)
        setIsVisible(false)
        onClose()
      }
    }, intervalTime)

    return () => clearInterval(timer)
  }, [isVisible, onClose])

  if (!isVisible) return null

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500"
  const Icon = type === "success" ? CheckCircle : CheckCircle // Always CheckCircle for success, or you can add XCircle for error

  return (
    <div
      className={`fixed bottom-8 right-8 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex flex-col overflow-hidden z-[100]`}
    >
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6" />
        <span>{message}</span>
      </div>
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/30" style={{ width: `${progress}%` }}></div>
    </div>
  )
}

export default ToastMessage
