import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import MobileMenu from './components/MobileMenu/Menu'

import Dashboard from './pages/dashboard/Dashboard'
import Organizations from './pages/organizations/Organizations'
import CreateFormOrg from './pages/organizations/create-organization/CreateFormOrg'
import Staff from './pages/staff/Staff'


export default function Home() {
  return (
      <div className="mainContainer">
      <Sidebar />
      <Navbar />
        <div className="contentContainer">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/organizations" element={<Organizations />} />
            <Route path="/organizations/create-organization" element={<CreateFormOrg/>} />
            <Route path="/staff" element={<Staff />} />
          </Routes>
        </div>
      <MobileMenu />
      </div>
  )
}
