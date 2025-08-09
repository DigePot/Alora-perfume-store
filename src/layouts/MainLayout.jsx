import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import { mainNavItems } from "../components/navbar/NavConfig"
import Footer from "../components/footer/Footer"

const MainLayout = () => {
  return (
    <>
     <Navbar navItems={mainNavItems} />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
