import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function ViewEmployees() {
    const [emps, setEmps] = useState([])
    const history = useHistory();
    function deleteEmployee(id) {
        axios.delete('http://localhost:3004/employees/' + id).then(
            res => {
                getData()
            }
        ).catch(err => {
            console.log(err);
        })
    }
    function editEmployee(id) {
        history.push("/editEmp/"+ id)
    }
    function getData() {
        axios.get('http://localhost:3004/employees').then(res => { setEmps(res['data']) }).catch(err => { console.log(err); })
    }
    useEffect(() => {
         getData()
    }, [])
    const classes = useStyles();
    return (
        <div>
            <h2>View Employees</h2>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Emp Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Mobile</TableCell>
                            <TableCell>Aadhar</TableCell>
                            <TableCell>Pan</TableCell>
                            <TableCell>Bank name</TableCell>
                            <TableCell>Account number</TableCell>
                            <TableCell>Ifsc</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {emps.map((emps) => (
                            <TableRow key={emps.id}>
                                <TableCell component="th" scope="row">
                                    {emps.empId}
                                </TableCell>
                                <TableCell>{emps.empName}</TableCell>
                                <TableCell>{emps.empEmail}</TableCell>
                                <TableCell>{emps.empMobileNumber}</TableCell>
                                <TableCell>{emps.empAadhar}</TableCell>
                                <TableCell>{emps.empPancard}</TableCell>
                                <TableCell>{emps.empBankName}</TableCell>
                                <TableCell>{emps.empBankAcNumber}</TableCell>
                                <TableCell>{emps.empBankIfsc}</TableCell>
                                <TableCell><EditIcon onClick={() => editEmployee(emps.id)} color="action" />
                                    <DeleteIcon onClick={() => deleteEmployee(emps.id)} color="action" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
