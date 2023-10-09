import { 
    BsFillGridFill,
    BsFillBuildingsFill,
    BsFillPersonFill,
    BsFillPeopleFill,
    BsFillDiagram3Fill,
    BsBarChartLineFill,
    BsFillPersonLinesFill,
    BsFillMapFill,
    BsFillGrid1X2Fill,
    BsClipboard2Fill,
    BsTruckFrontFill,
    BsCloudLightningRainFill,
    BsExclamationOctagonFill,
    BsFillExclamationTriangleFill
 } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import {AiTwotoneVideoCamera} from 'react-icons/ai'
 

const menuItem = [
   
    {
        path:"/tambuli-alert/dashboard",
        name:"Dashboard",
        icon:<BsFillGridFill/>
    },
    {
        path:"/tambuli-alert/weather",
        name:"Weather",
        icon:<BsCloudLightningRainFill/>
    },
    {
        path:"/tambuli-alert/organizations",
        name:"Organizations",
        icon:<BsFillBuildingsFill/>
    },
    {
        path:"/tambuli-alert/activities",
        name:"Activities",
        icon:<BsFillBuildingsFill/>
    },
    {
        path:"/tambuli-alert/facilities",
        name:"Facilities",
        icon:<BsFillBuildingsFill/>
    },
    {
        path:"/tambuli-alert/staff",
        name:"Staff",
        icon:<BsFillPersonFill/>
        
    },
    {
        path:"/tambuli-alert/video",
        name:"Video",
        icon:<AiTwotoneVideoCamera/>
        
    },

    {
        path:"/tambuli-alert/volunteers",
        name:"Volunteers",
        icon:<BsFillPeopleFill/>
        
    },

    {
        path:"/tambuli-alert/projects",
        name:"Projects",
        icon:<BsFillDiagram3Fill/>
        
    },

    {
        path:"/tambuli-alert/assets",
        name:"Assets",
        icon:<BsBarChartLineFill/>
    },
    {
        path:"/tambuli-alert/assessments",
        name:"Assessments",
        icon:<BsFillPersonLinesFill/>
    },
    {
        path:"/tambuli-alert/map",
        name:"Map",
        icon:<BsFillMapFill/>
    },
    {
        path:"/tambuli-alert/incidents",
        name:"Incidents",
        icon:<BsFillExclamationTriangleFill/>
    },
    {
        path:"/tambuli-alert/contentmanagement",
        name:"Content Management",
        icon:<BsFillGrid1X2Fill/>
    },
    {
        path:"/tambuli-alert/documents",
        name:"Documents",
        icon:<BsClipboard2Fill/>
    },
    {
        path:"/tambuli-alert/vehicles",
        name:"Vehicles",
        icon:<BsTruckFrontFill/>
    },
    {
        path:"/tambuli-alert/requests",
        name:"Requests",
        icon:<BsExclamationOctagonFill/>
    },
   
]
export default function Menu() {

  return (
    <div className='mobileMenu'>
        {menuItem.map((item, index)=>(
        <NavLink to={item.path} key={index} className={ `mobileLink ${({ isActive}) => isActive ? "active" : '' }`} >
              <div className="icon">{item.icon}</div>
                <span className='name'>{item.name.slice(0, 11)}</span>
        </NavLink>
        ))}
    </div>
  )
}
