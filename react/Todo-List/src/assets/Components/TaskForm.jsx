import React, { useState, useEffect } from 'react';

const TaskForm = (props) => {

    const [description, setDesc] = useState("");
    const [status, setStatus] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            description: description,
            status: status
        }
        props.onSubmit(newTask);

    };


    const handleInput = (e) => {
        setDesc(e.target.value);
    }


    return (
        <>
            <form className="form-group d-flex justify-content-center" onSubmit={handleSubmit}>
                <div className="row ">
                    <div className="col-auto ">
                        <input type="text" className="form-control " name="" id="" onChange={handleInput} value={description} />
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
