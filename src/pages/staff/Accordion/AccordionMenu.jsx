import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { BsFillCaretDownFill } from 'react-icons/bs'


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
          <h2>STAFF</h2>
        </AccordionSummary>
        </div>
        <div className="accordionContent">
          <button className='btn-1'>Create</button>
          <button className='btn-1'>Search by skills</button>
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
          <span className='text-xs font-semibold'>STAFF & VOLUNTEERS(COMBINED)</span>
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
          <h2>TEAMS</h2>
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
          <h2>DEPARTMENT CATALOG</h2>
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
          <h2>JOB TITLE CATALOG</h2>
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
          <h2>SKILL CATALOG</h2>
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
          <h2>TRAINING EVENTS</h2>
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
          <h2>TRAINING COURSE CATALOG</h2>
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
          <h2>CERTIFICATE CATALOG</h2>
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
          <h2>REPORTS</h2>
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