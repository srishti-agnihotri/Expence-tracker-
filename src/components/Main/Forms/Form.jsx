import React,  { useState } from 'react'
import {TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

import useStyles from './styles'

const initialState ={
    amount :'',
    catagory: '',
    type: "Income",
    date:new Date(),
}


const Form = () => {
    const classes = useStyles();
    const[ formData , setFormData] = useState(initialState);
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant= "subtitle2" gutterBottom>
                    ...
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e) => setFormData({ ...formData,type:e.target.value})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Catogery</InputLabel>
                    <Select value={formData.catagory} onChange={(e) => setFormData({ ...FormData,  catagory: e.targert.value })}>
                        <MenuItem value="business">Business</MenuItem>
                        <MenuItem value ="salary">Salary</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs ={6}>
                <TextField type ="number" label="Amount" fullWidth value={ formData.amount } onChange={(e) => setFormData({ ... formData,amount})}/>
            </Grid>
            <Grid item xs ={6}>
                <TextField type ="Date" label="Date" fullWidth />
            </Grid>
            <Button className = {classes.Button} variant="outlined" color= "primary" fullWidth>Creat</Button>

        </Grid>
    )
}

export default Form
