import React, { useState } from 'react';

const TaskForm = (props) => {
    const [task, setTask] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(task);
        setTask("");
    };

    const handleInput = (e) => setTask(e.target.value);

    return (
        <>
            <form className="form-group d-flex justify-content-center" onSubmit={handleSubmit}>
                <div className="row ">
                    <div className="col-auto ">
                        <input type="text" className="form-control " name="" id="" onChange={handleInput} value={task} />
                    </div>
                    <div className="col-auto ">
                        <input type="submit" className="btn  btn-primary ms-3" value="Add task" />
                    </div>
                </div>
            </form>
        </>
    );
};

export default TaskForm;
