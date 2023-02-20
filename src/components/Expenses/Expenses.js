
import React, { useState } from 'react';
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"

const Expenses = (props) => {
    const [filteredPriority, setFilteredPriority] =
        useState('All')

    const filterChangeHandler = (priority) => {
        console.log('Filter change handled by Expenses.js')
        console.log(priority + ' in Expenses.js')
        setFilteredPriority(priority)
    }
    const filteredExpenses = props.expenses.filter(
        (expense) => {
            return expense.date.getFullYear().toString() === filteredPriority
        }
    )

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredPriority} onChangeFilter={filterChangeHandler}></ExpensesFilter>

            {filteredExpenses.length === 0 && <p style={{color: 'white'}}>No tasks found.</p>}
            {filteredExpenses.length > 0 &&
                filteredExpenses.map((expense) => {
                    return <ExpenseItem
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    ></ExpenseItem>
                })
            }
        </Card>
    )
}

export default Expenses