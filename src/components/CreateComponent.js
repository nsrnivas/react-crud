import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { useForm } from 'react-hook-form';
import React, { useEffect } from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: 20
    },
    submitButton: {
        textAlign: 'center',
    }
}));

export default function CreateComponent() {
    const classes = useStyles();
    const history = useHistory();
    const { register, handleSubmit,setValue  } = useForm({
        defaultValues: {
            empId: "",
            empName: "",
            empEmail: "",
            empMobileNumber: "",
            empAadhar: "",
            empPancard: "",
            empPancard: "",
            empBankName: "",
            empBankAcNumber: "",
            empBankIfsc: ""
          }
    });
    const queryString = window.location.pathname;
    const editEmpId = queryString.replace(/[^0-9]/g, '');
    const onSubmit = data => {
        axios.post('http://localhost:3004/employees', data).then(function (responce) {
            history.push("/viewEmps")
        }).catch(function (error) {
            console.log(error);
        })
    };
    useEffect(() => {
        const queryString = window.location.pathname;
        const editEmpId = queryString.replace(/[^0-9]/g, '');
        axios.get('http://localhost:3004/employees/' + editEmpId).then(
            res => {
                defaultValues(res['data']);
                
            },
            err => {
                console.log(err);
            }
        )
    })
    return (
        <Container>
            <h2>{editEmpId ? 'Edit' : 'Add'} Employee </h2>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
                <div className={classes.    root}>
                    <Grid container spacing={5}>
                        <Grid item xs={4}>
                            <TextField fullWidth id="outlined-basic" name="empId" value inputRef={register} label="Employee Id" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth id="outlined-basic" name="empName" inputRef={register} label="Employee Name" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth id="outlined-basic" name="empEmail" inputRef={register} label="Employee Email" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth id="outlined-basic" name="empMobileNumber" inputRef={register} label="Employee Mobile Nuumber" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth id="outlined-basic" name="empAadhar" inputRef={register} label="Employee Aadhar Number" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth id="outlined-basic" name="empPancard" inputRef={register} label="Employee Pancard" variant="outlined" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth id="outlined-basic" name="empBankName" inputRef={register} label="Employee Bank name" variant="outlined" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth id="outlined-basic" name="empBankAcNumber" inputRef={register} label="Employee Bank Account Number" variant="outlined" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField inputRef={register} required name="empBankIfsc" fullWidth id="outlined-basic" label="Employee Bank Ifsc" variant="outlined" />
                        </Grid>
                    </Grid>
                </div>
                <Button className={classes.submitButton} variant="contained" type={"submit"} color="primary">
                    {editEmpId ? 'Edit' : 'Save'}
                </Button>
            </form>
        </Container>
    )
}
