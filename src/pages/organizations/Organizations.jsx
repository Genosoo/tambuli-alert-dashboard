import Search from './Search/Search'
import Table from './Table/Table'
import Menu from './Accordion/AccordionMenu'
import ExportButton from './ExportButton/ExportButton'



export default function Organizations() {
  return (
    <div 
     className='orgContainer'
    >
      <h1 className='title'>Organizations</h1>
        <div className="orgContent-1">
          <Search />
          <Table />
          <ExportButton />
        </div>
        <div className='orgContent-2'>
         <Menu />
        </div>
    </div>
  )
}
