import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const createData = (id, title, category) => ({
  id, title, category,
});

const rows = [
  createData(1, 'Test', 'Test'),
  createData(1, 'Test', 'Test'),
  createData(1, 'Test', 'Test'),
  createData(1, 'Test', 'Test'),
  createData(1, 'Test', 'Test'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer class="size" component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead class="orange">
          <TableRow>
            <TableCell>Book ID</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody class="silver">
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
