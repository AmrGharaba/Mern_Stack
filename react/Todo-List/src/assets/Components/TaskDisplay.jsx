import React, { useEffect } from 'react';

const TaskDisplay = (props) => {
    const { taskArr, setTaskArr } = props;

    useEffect(() => {
        console.log(taskArr);
    }, [taskArr]);

    const handleToggle = (idx) => {

        const updatedTaskArr = [...taskArr];
        updatedTaskArr[idx].status = !updatedTaskArr[idx].status;
        setTaskArr(updatedTaskArr);
    }

    const handleDelete = (idx) => {
        const deleteTaskArr = [...taskArr];
        deleteTaskArr.splice(idx, 1)
        setTaskArr(deleteTaskArr);

    }

    return (
        <>
            <ul className="list-group">
                {taskArr.map((item, idx) => (
                    <li className="list-group-item" key={idx}>
                        <input type="checkbox" checked={item.status ? true : false} onChange={() => handleToggle(idx)} />
                        <span style={{ marginLeft: '5px', marginRight: '10px', textDecoration: item.status ? "line-through" : "none", }}>{item.description}</span>
                        <input type="button" value="Delete" onClick={() => handleDelete(idx)} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TaskDisplay;
