import React from 'react'
import {Card , CardHeader ,CardContent, Typography, Grid, Divider } from '@material-ui/core'; 

import useStyles from './styles';
const Main = () => {
    const classes =useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardHeader title = " Expence Tracker" subheader=" Powered by speechly" />
                <CardContent>
                    <Typography align = "center" variant='h5 '>Totel balance RS 100</Typography>
                    <Typography variant = "subtitle1" style ={{lineHeight : '1.5em' ,marginTop :'20px'}}>
                         {/* try saying:add income for Rs 100 incatogoy Salary for monday */}
                    </Typography>
                    <Divider />
                    {/*Form */}
                 </CardContent>
                <CardContent className ={classes.cardContent}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                           {/* <List/>*/}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default Main
