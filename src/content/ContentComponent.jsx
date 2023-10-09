import { Routes, Route } from 'react-router-dom'

import Dashboard from '../pages/dashboard/Dashboard'
import Organizations from '../pages/organizations/Organizations'
import CreateFormOrg from '../pages/organizations/create-organization/CreateFormOrg'
import Staff from '../pages/staff/Staff'
import WeatherComponent from '../pages/weather'
import Map from '../pages/map'
import Incidents from '../pages/Incidents'
import Facilities from '../pages/facilities'
import Activities from '../pages/activities'
import Video from '../pages/video'


export default function ContentComponent() {
  return (
    <Routes>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="organizations" element={<Organizations />} />
        <Route path="create-organization" element={<CreateFormOrg/>} />
        <Route path="staff" element={<Staff />} />
        <Route path="weather" element={<WeatherComponent />} />
        <Route path="incidents" element={<Incidents />} />
        <Route path="facilities" element={<Facilities/>} />
        <Route path="activities" element={<Activities/>} />
        <Route path="video" element={<Video/>} />
        <Route path="map" element={<Map />} />
    </Routes>
  )
}
