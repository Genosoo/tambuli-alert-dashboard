import { 
  GoZap,
  GoPeople,
  GoPackage,
  GoProjectRoadmap,
  GoCodeOfConduct,
  GoContainer,
  GoPaste
} from 'react-icons/go'

import { 
   BsCloudLightningRainFill,
   BsFillMapFill,
   BsFillBuildingsFill,
   BsFillDiagram3Fill,
   BsFillPersonFill,

} from 'react-icons/bs'
import {AiTwotoneVideoCamera} from 'react-icons/ai'

import { Link } from 'react-router-dom'

export default function Cards() {
  return (
    <div className='cardContainer'>
        <div className="cardWrapper cardWrapper-1">
           <div className="cardBoxContainer cardBoxContainer-1">
              <span className='cardTitle'>Situation Awareness</span>
              <Link to={'/tambuli-alert/weather'}>
              <div className="cardBox">
                 <span>Weather</span>
                 <div className="cardCircle">
                     <BsCloudLightningRainFill/>
                 </div>
              </div>
              </Link>

              <Link to={'/tambuli-alert/video'}>
              <div className="cardBox">
                 <span >Video Streaming</span>
                 <div className="cardCircle">
                     <AiTwotoneVideoCamera/>
                 </div>
              </div>
              </Link>
              
              <Link to={'/tambuli-alert/map'}>
              <div className="cardBox">
                 <span>Map</span>
                 <div className="cardCircle">
                     <BsFillMapFill/>
                 </div>
              </div>
              </Link>

              
           </div>
           <div className="cardBoxContainer cardBoxContainer-2">
             <span className='cardTitle'>Manage Facilities</span>
             <select name="" id="">
               <option value="">Please Select</option>
               <option value="Facility1">Facility 1</option>
               <option value="Facility2">Facility 2</option>
               <option value="Facility3">Facility 3</option>
               <option value="Facility4">Facility 4</option>
             </select>
             <button>Go</button>
           </div>
        </div>

        <div className="cardWrapper cardWrapper-2">
           <div className="cardBoxContainer cardBoxContainer-3">
              <span className='cardTitle'>Who is doing What and Where</span>
              <Link to={'/tambuli-alert/organizations'}>
              <div className="cardBox">
                 <span>Organizations</span>
                 <div className="cardCircle">
                     <BsFillBuildingsFill/>
                 </div>
              </div>
              </Link>
             <Link to={'/tambuli-alert/facilities'}>
               <div className="cardBox">
                     <span>Facilities</span>
                     <div className="cardCircle">
                         <BsFillBuildingsFill/>
                     </div>
                  </div>
             </Link>
             <Link to={'/tambuli-alert/activities'}>
               <div className="cardBox">
                  <span>Activities</span>
                  <div className="cardCircle">
                      <BsFillBuildingsFill/>
                  </div>
               </div>
             </Link>
              <div className="cardBox">
                 <span>Projects</span>
                 <div className="cardCircle">
                   <BsFillDiagram3Fill/>
                 </div>
              </div>
           </div>
        </div>

        <div className="cardWrapper cardWrapper-2">
           <div className="cardBoxContainer cardBoxContainer-3">
              <span className='cardTitle'>Manage Resources</span>
             
              <Link to={'/tambuli-alert/staff'}>
               <div className="cardBox">
                  <span>Staff</span>
                  <div className="cardCircle">
                      <BsFillPersonFill/>
                  </div>
               </div>
              </Link>
              <div className="cardBox">
                 <span>Volunteers</span>
                 <div className="cardCircle">
                     <GoPeople/>
                  </div>
              </div>
              <div className="cardBox">
                 <span>Relief Goods</span>
                 <div className="cardCircle">
                     <GoPackage/>
                 </div>
              </div>
              <div className="cardBox">
                 <span>Assets</span>
                 <div className="cardCircle">
                     <GoProjectRoadmap/>
                 </div>
              </div>
           </div>
        </div>

        <div className="cardWrapper cardWrapper-2">
           <div className="cardBoxContainer cardBoxContainer-3">
              <span className='cardTitle'>Manage Aid</span>
              <div className="cardBox">
                 <span>Requests</span>
                 <div className="cardCircle">
                     <GoZap/>
                 </div>
              </div>
              <div className="cardBox">
                 <span>Commitments</span>
                 <div className="cardCircle">
                     <GoCodeOfConduct/>
                 </div>
              </div>
              <div className="cardBox">
                 <span>Shipments</span>
                 <div className="cardCircle">
                     <GoContainer/>
                 </div>
              </div>
              <div className="cardBox">
                 <span>Received Shipments</span>
                 <div className="cardCircle">
                     <GoPaste/>
                 </div>
              </div>
           </div>
        </div>
    
        
    </div>
  )
}
