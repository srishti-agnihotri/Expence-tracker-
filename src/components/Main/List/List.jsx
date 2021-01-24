import React, { useContext } from 'react';
import{ List as MUList, ListItem, ListItemAvatar,  Avatar, ListItemSecondaryAction, IconButton, Slide, ListItemText} from '@material-ui/core';
import {Delete,MoneyOff } from '@material-ui/icons';

import {ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles'

const List = () => {
    const classes = useStyles();
    const { deleteTransaction } = useContext(ExpenseTrackerContext);

    

    const transactions = [
        { id: 1, type :"Income", catogary: "Salary" , amount : 50, date : "Sun Jan 10" },
        { id: 2, type :"Expense", catogary: "food" , amount : 500, date : "Sun Jan 11" },
        { id: 3, type :"Income", catogary: "youtube" , amount : 150, date : "Sun Jan 12" }

    ];
    return (
        <MUList dense={false} className={classes.list}>
         {transactions.map(transactions => (
             <Slide direction = "down" in mountOnEnter unmountOnExit key={transactions.id}>
                 <ListItem>
                     <ListItemAvatar>
                         <Avatar className={transactions.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                            <MoneyOff />
                         </Avatar>
                     </ListItemAvatar>
                     <ListItemText primary = {transactions.catogary } secondary={`Rs ${transactions.amount}- ${transactions.date}`}/>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label ="delete" onClick="">
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                 </ListItem>

             </Slide>
         ))}
        </MUList>
    )
}

export default List
