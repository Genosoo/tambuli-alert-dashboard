import Cards from './Cards/Cards'
import Table from './Table/Table'



export default function Dashboard() {
  return (
    <div className='dashboardContainer'>
        <h1 className="title">Dashboard</h1>
        <Cards />
        <Table />
    </div>
  )
}
