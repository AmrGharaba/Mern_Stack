import React, { useState } from 'react';

const TaskDisplay = ({ taskArray, onRemove }) => {

    // const toggleCheckbox = (index) => {

    // };

    const remove = (index) => {
        onRemove(index);
    };

    return (
        <>
            <ul className="list-group">
                {taskArray.map((item, idx) => (
                    <li className="list-group-item" key={idx}>
                        <input
                            type="checkbox"
                        // checked={false}
                        // onChange={() => toggleCheckbox(idx)}
                        />
                        <span style={{ marginLeft: '5px', marginRight: '10px' }}>{item}</span>
                        <button onClick={() => remove(idx)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TaskDisplay;
