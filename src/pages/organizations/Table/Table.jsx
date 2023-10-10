import { useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'acronym', label: 'Acronym', minWidth: 170 },
  { id: 'type', label: 'Type', minWidth: 170 },
  { id: 'website', label: 'Website', minWidth: 170 },
  { id: 'action', label: 'Action', minWidth: 170 },
];

const data = [
  { name: 'Item 1', acronym: 'A1', type: 'Type A', website: 'example.com/item1' },
  { name: 'Item 2', acronym: 'A2', type: 'Type B', website: 'example.com/item2' },
  { name: 'Item 2', acronym: 'A2', type: 'Type B', website: 'example.com/item2' },
  { name: 'Item 2', acronym: 'A2', type: 'Type B', website: 'example.com/item2' },
  { name: 'Item 2', acronym: 'A2', type: 'Type B', website: 'example.com/item2' },
  { name: 'Item 2', acronym: 'A2', type: 'Type B', website: 'example.com/item2' },
  { name: 'Item 2', acronym: 'A2', type: 'Type B', website: 'example.com/item2' },
  { name: 'Item 2', acronym: 'A2', type: 'Type B', website: 'example.com/item2' },
  // Add more data objects as needed
];


export default function CustomizedTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="orgTableWrapper">
      <TableContainer sx={{ maxHeight: 440, borderRadius: '10px' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === 'action' ? (
                            <div className='actionBtn'>
                              <button className='open'>Open</button>
                              <button className='delete'>Delete</button>
                            </div>
                          ) : (
                            column.format && typeof value === 'number' ? column.format(value) : value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
