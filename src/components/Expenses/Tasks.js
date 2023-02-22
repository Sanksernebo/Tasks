
import React, { useState } from 'react';
import './Tasks.css'
import TasksItem from "./TasksItem";
import Card from "../UI/Card"
import TasksFilter from "./TasksFilter"

const Tasks = (props) => {
    const [filteredPriority, setFilteredPriority] =
        useState('All')

    const filterChangeHandler = (priority) => {
        console.log('Filter change handled by Expenses.js')
        console.log(priority + ' in Expenses.js')
        setFilteredPriority(priority)
    }
    const filteredExpenses = props.expenses.filter(
        (task) => {
            if (filteredPriority === 'All') {
                return task.priority
            }
            return task.priority === filteredPriority
        }
    )

    return (
        <Card className="expenses">
            <TasksFilter selected={filteredPriority} onChangeFilter={filterChangeHandler}></TasksFilter>

            {filteredExpenses.length === 0 && <p style={{color: 'white'}}>No tasks found.</p>}
            {filteredExpenses.length > 0 &&
                filteredExpenses.map((expense) => {
                    return <TasksItem
                        id={expense.id}
                        task={expense.task}
                        priority={expense.priority}
                        date={expense.date}
                    ></TasksItem>
                })
            }
        </Card>
    )
}

export default Tasks