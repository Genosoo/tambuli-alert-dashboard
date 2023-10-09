import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import MobileMenu from "../../components/MobileMenu/Menu"

export default function Layout() {
  return (
    <div className="mainContainer">
      <Sidebar />
      <Navbar />
        <div className="contentContainer">
            <Outlet />
        </div>
      <MobileMenu />
    </div>
  )
}
