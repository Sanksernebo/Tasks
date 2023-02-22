import React from 'react';

import './TasksFilter.css';

const TasksFilter = (props) => {
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by priority</label>
                <select value={props.selected} onChange={(event) => props.onChangeFilter(event.target.value)}>
                    <option value='All'>All</option>
                    <option value='Critical'>Critical</option>
                    <option value='Medium'>Medium</option>
                    <option value='Low'>Low</option>
                </select>
            </div>
        </div>
    );
};

export default TasksFilter;