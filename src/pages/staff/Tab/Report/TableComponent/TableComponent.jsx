import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const data = [
  { organization: 'Org A', training: 10, total: 20 },
  { organization: 'Org B', training: 15, total: 25 },
  { organization: 'Org C', training: 8, total: 18 },
  // Add more data as needed
];

function DataTable() {
  // Calculate the sum of the "training" and "total" columns
  const totalTraining = data.reduce((sum, row) => sum + row.training, 0);
  const totalTotal = data.reduce((sum, row) => sum + row.total, 0);

  return (
    <div className="reportTableContainer">
    <h3>Table</h3>
      <TableContainer component={Paper} sx={{borderRadius:"15px"}}>
        <Table>
            <TableHead>
            <TableRow>

                <TableCell >
                    <div className='tableTitleWrapper'>
                        <span>Person (Count)</span>
                        <h4 className=''>Organization</h4>
                    </div>
                </TableCell>
                <TableCell>
                <div className='tableTitleWrapper'>
                  <span>Training</span>
                </div>
                </TableCell>
                <TableCell>
                    <div className="tableTitleWrapper">
                        <span>Total</span>
                    </div>
                </TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((row, index) => (
                <TableRow key={index}>
                <TableCell>{row.organization}</TableCell>
                <TableCell>{row.training}</TableCell>
                <TableCell>{row.total}</TableCell>
                </TableRow>
            ))}
            {/* Add a row for the totals */}
            <TableRow>
                <TableCell>
                    <div className="tableTitleWrapper">
                        <span>Total</span>
                    </div>
                </TableCell>
                <TableCell>{totalTraining}</TableCell>
                <TableCell>{totalTotal}</TableCell>
            </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
    </div>
  );
}

export default DataTable;
