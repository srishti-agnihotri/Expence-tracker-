import React from 'react';
import {Card , CardHeader, CardContent, Typography } from '@material-ui/core';
import {Dougnut } from 'react-chartjs-2';

import useStyles from './styles';

const Details = ({title}) => {
    const classes = useStyles();
    return (
        <Card className ={title==='Income' ? classes.income : classes.expense}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography varient="h5">Rs 50 </Typography>
                {/*<Dougnut data="DATA"/> */}
            </CardContent>
        </Card>
    )
}

export default Details
