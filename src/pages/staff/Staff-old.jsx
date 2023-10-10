import Tabs from './Tab/Tabs'
import Search from './Search/Search'
import Accordion from './Accordion/AccordionMenu'


export default function Staff() {
  return (
    <div className='staffContainer'>
      <h1 className='title'>Staff</h1>
      <div className="staffContent-1">
          <Search />
          <Tabs />
      </div>
      <div className="staffContent-2">
        <Accordion />
      </div>
    </div>
  )
}
