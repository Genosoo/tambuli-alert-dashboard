import Linechart from './Charts/LineChart'
import DonutChart from './Charts/DonutChart'

export default function GraphComponent() {
  return (
    <div className='graphContainer'>
        <h1 className='graphTitle'>Graphs</h1>
        <div className="graphWrapper">
            <div className="graphContent graphContent-1">
                <div className="graphHeader graphHeader-1">
                    <span>Person (Count)</span> 
                    <div className="graphBtnWrapper">
                        <button className='btn1'>Per Organization</button>
                        <button className='btn2'>Per Training</button>
                    </div>
                </div>
                <div className="graphBox">
                    <DonutChart />
                </div>
            </div>
            <div className="graphContent graphContent-2">
            <div className="graphHeader graphHeader-2">
                    <span>Breakdown</span> 
                    <div className="graphBtnWrapper">
                        <button className='btn1'>Per Organization</button>
                        <button className='btn2'>Per Training</button>
                    </div>
                </div>
                <div className="graphBox">
                    <Linechart />
                </div>
            </div>
        </div>
    </div>
  )
}
