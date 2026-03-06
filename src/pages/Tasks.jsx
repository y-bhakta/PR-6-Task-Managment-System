import React, { useEffect } from 'react'

const Tasks = ({ handelSubmit, handelChange, task }) => {

    return (
        <>
            <div>
                <main className="nxl-container apps-container apps-tasks">
                    <div className="nxl-content without-header nxl-full-content">
                        <div className='container py-5'>
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <form method='post' onSubmit={handelSubmit}>
                                        <h2>Task App</h2>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Task Name</label>
                                            <input type="text" name='task' className="form-control" value={task.task || ''} onChange={handelChange} />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Add Task</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Tasks
