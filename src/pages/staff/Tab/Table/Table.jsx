import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {dataStaff} from "../../../../context/DataTable"
import ExportButton from './ExportButton/ExportButton';

// Define your data source


const columns = [
  { id: 'person', label: 'Person', minWidth: 170 },
  { id: 'jobTitle', label: 'Job Title', minWidth: 170 },
  { id: 'organization', label: 'Organization', minWidth: 170 },
  { id: 'departmentunit', label: 'Department/Unit', minWidth: 170 },
  { id: 'facility', label: 'Facility', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 170 },
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
    <div>
      <TableContainer sx={{ borderRadius: '10px' }}>
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
            {dataStaff
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
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
        count={dataStaff.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <ExportButton />
    </div>
  );
}
