
import './ExpenseForm.css'
import React, { useState } from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [formEdit, setFormEdit] = useState(false);


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        setFormEdit(false)
    }


    return (
        <div>
            <button onClick={() => setFormEdit(true)}>Add Task</button>
            {formEdit && (
                <form onSubmit={submitHandler}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>New Task</label>
                            <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                        </div>
                        <div className="new-expense__control">
                            <label>Priority</label>
                            <select value={props.selected} onChange={(event) => props.onChangeFilter(event.target.value)}>
                                <option value='Critical'>Critical</option>
                                <option value='Medium'>Medium</option>
                                <option value='Low'>Low</option>
                            </select>
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input type="date" min="2023-01-18" max="2025-12-31" onChange={dateChangeHandler}/>
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button type="submit">Add Task</button>
                        <button onClick={() => setFormEdit(false)}>Cancel</button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default ExpenseForm