import GraphComponent from './GraphComponent/GraphComponent';
import InputComponent from './InputComponent/InputComponent';
import TableComponent from './TableComponent/TableComponent';

export default function Report() {
   
  return (
    <div className="reportContainer">
        <div className="reportHeader">
            <h1>Report Options</h1>
            <InputComponent  />
        </div>
        <GraphComponent />

        <TableComponent />
    </div>
  )
}
