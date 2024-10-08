import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(srNumber, name, title, noOfStudents) {
  return { srNumber, name, title, noOfStudents };
}

const rows = [
  createData(1, 'Social Studies', '', 24),
  createData(2, 'History', '', 37),
  createData(3, 'Economics', '', 24),
  createData(4, 'Mathematics', '', 49),
];

const Details = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>SR Number</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">No Of Students</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.srNumber}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.srNumber}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.noOfStudents}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Details;
