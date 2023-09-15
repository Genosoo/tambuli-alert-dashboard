import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { BsFillCaretDownFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <div className="accordionHeader">
        <AccordionSummary
          expandIcon={<BsFillCaretDownFill />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h2>Organization</h2>
        </AccordionSummary>
        </div>
        <div className="accordionContent">
          <button className='btn-1'>
            <Link to={'/organizations/create-organization'}>Create Organization</Link>
          </button>
          <button className='btn-2'>Import</button>
        </div>
      </Accordion>

      <Accordion>
        <div className="accordionHeader">
        <AccordionSummary
          expandIcon={<BsFillCaretDownFill />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h2>Offices</h2>
        </AccordionSummary>
        </div>
        <div className="accordionContent">
          <button className='btn-1'>Create Organization</button>
          <button className='btn-2'>Import</button>
        </div>
      </Accordion>

      <Accordion>
        <div className="accordionHeader">
        <AccordionSummary
          expandIcon={<BsFillCaretDownFill />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h2>Organization</h2>
        </AccordionSummary>
        </div>
        <div className="accordionContent">
          <button className='btn-1'>Create Organization</button>
          <button className='btn-2'>Import</button>
        </div>
      </Accordion>


      <Accordion>
        <div className="accordionHeader">
        <AccordionSummary
          expandIcon={<BsFillCaretDownFill />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h2>Facilities</h2>
        </AccordionSummary>
        </div>
        <div className="accordionContent">
          <button className='btn-1'>Create Organization</button>
          <button className='btn-2'>Import</button>
        </div>
      </Accordion>

      <Accordion>
        <div className="accordionHeader">
        <AccordionSummary
          expandIcon={<BsFillCaretDownFill />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h2>Resources</h2>
        </AccordionSummary>
        </div>
        <div className="accordionContent">
          <button className='btn-1'>Create Organization</button>
          <button className='btn-2'>Import</button>
        </div>
      </Accordion>
    </div>
  );
}