import { useState } from 'react';
import { AiOutlineAlignLeft } from 'react-icons/ai'
import Logo from '../../assets/logo.png'
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

 import {AiTwotoneVideoCamera} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';

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
        path:"/tambuli-alert/video",
        name:"Video",
        icon:<AiTwotoneVideoCamera/>
        
    },

    {
        path:"/tambuli-alert/organizations",
        name:"Organizations",
        icon:<BsFillBuildingsFill/>
    },
    {
        path:"/tambuli-alert/facilities",
        name:"Facilities",
        icon:<BsFillBuildingsFill/>
    },
    {
        path:"/tambuli-alert/activities",
        name:"Activities",
        icon:<BsFillBuildingsFill/>
    },
    {
        path:"/tambuli-alert/staff",
        name:"Staff",
        icon:<BsFillPersonFill/>
        
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

const Sidebar = () => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
   
    return (
        <div className="sidebarContainer">
           <div style={{width: isOpen ? "250px" : "90px"}} className="sidebar">
               <div className="top_section">
                   <div className="logo">
                   <img src={Logo} alt="logo"  style={{
                        width: isOpen ? '70%' : '80px',
                        transition: 'width 0.3s ease',
                    }} />
                   </div>
                   
               </div>

              <div className="linkWrapper">
              <span>Navigate</span>
               {menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className={ `link ${({ isActive}) => isActive ? "active" : '' }`} style={{justifyContent: isOpen ? "start" :  "center"}}  >
                           <div className="icon">{item.icon}</div>
                           <h2 style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</h2>
                       </NavLink>
                ))}
              </div>
           </div>

           <div style={{marginLeft: isOpen ? "20px" : "10px"}} className="bars">
                       <AiOutlineAlignLeft onClick={toggle}/>
            </div>

        </div>
    );
};




export default Sidebar;