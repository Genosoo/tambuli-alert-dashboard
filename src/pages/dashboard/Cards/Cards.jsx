import { 
  GoLocation,
  GoZap,
  GoOrganization,
  GoHome,
  GoGraph,
  GoProject,
  GoPeople,
  GoPerson,
  GoPackage,
  GoProjectRoadmap,
  GoAlert,
  GoCodeOfConduct,
  GoContainer,
  GoPaste
} from 'react-icons/go'



export default function Cards() {
  return (
    <div className='cardContainer'>
        <div className="cardWrapper cardWrapper-1">
           <div className="cardBoxContainer cardBoxContainer-1">
              <span className='cardTitle'>Situation Awareness</span>
              <div className="cardBox">
                 <span >Map</span>
                 <div className="cardCircle">
                     <GoLocation/>
                 </div>
              </div>
              <div className="cardBox">
                 <span >Incidents</span>
                 <div className="cardCircle">
                     <GoAlert/>
                 </div>
              </div>

           </div>
           <div className="cardBoxContainer cardBoxContainer-2">
             <span className='cardTitle'>Manage Facilities</span>
             <select name="" id="">
               <option value="">Please Select</option>
             </select>
             <button>Go</button>
           </div>
        </div>

        <div className="cardWrapper cardWrapper-2">
           <div className="cardBoxContainer cardBoxContainer-3">
              <span className='cardTitle'>Who is doing What and Where</span>
              <div className="cardBox">
                 <span>Organizations</span>
                 <div className="cardCircle">
                     <GoOrganization/>
                 </div>
              </div>
              <div className="cardBox">
                 <span>Facilities</span>
                 <div className="cardCircle">
                     <GoHome/>
                 </div>
              </div>
              <div className="cardBox">
                 <span>Activities</span>
                 <div className="cardCircle">
                     <GoGraph/>
                 </div>
              </div>
              <div className="cardBox">
                 <span>Projects</span>
                 <div className="cardCircle">
                     <GoProject/>
                 </div>
              </div>
           </div>
        </div>

        <div className="cardWrapper cardWrapper-2">
           <div className="cardBoxContainer cardBoxContainer-3">
              <span className='cardTitle'>Manage Resources</span>
             
              <div className="cardBox">
                 <span>Staff</span>
                 <div className="cardCircle">
                     <GoPerson/>
                 </div>
              </div>
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
