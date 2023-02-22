import React from 'react';
import './NewTask.css'

import TasksForm from "./TasksForm";

const NewTask = (props) => {

    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }


    return(
        <div className="new-expense">
            <TasksForm onSaveExpenseData={saveExpenseDatahandler}></TasksForm>
        </div>
    )
}
export default NewTask