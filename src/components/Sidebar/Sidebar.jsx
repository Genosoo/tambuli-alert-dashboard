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
    BsExclamationOctagonFill
 } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const menuItem = [
    {
        path:"/dashboard",
        name:"Dashboard",
        icon:<BsFillGridFill/>
    },
    {
        path:"/organizations",
        name:"Organizations",
        icon:<BsFillBuildingsFill/>
    },
    {
        path:"/staff",
        name:"Staff",
        icon:<BsFillPersonFill/>
        
    },

    {
        path:"/volunteers",
        name:"Volunteers",
        icon:<BsFillPeopleFill/>
        
    },

    {
        path:"/projects",
        name:"Projects",
        icon:<BsFillDiagram3Fill/>
        
    },

    {
        path:"/assets",
        name:"Assets",
        icon:<BsBarChartLineFill/>
    },
    {
        path:"/assessments",
        name:"Assessments",
        icon:<BsFillPersonLinesFill/>
    },
    {
        path:"/map",
        name:"Map",
        icon:<BsFillMapFill/>
    },
    {
        path:"/contentmanagement",
        name:"Content Management",
        icon:<BsFillGrid1X2Fill/>
    },
    {
        path:"/documents",
        name:"Documents",
        icon:<BsClipboard2Fill/>
    },
    {
        path:"/vehicles",
        name:"Vehicles",
        icon:<BsTruckFrontFill/>
    },
    {
        path:"/requests",
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
                       <Link to={item.path} key={index} style={{justifyContent: isOpen ? "start" :  "center"}}  className={`link `}>
                           <div className="icon">{item.icon}</div>
                           <h2 style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</h2>
                       </Link>
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