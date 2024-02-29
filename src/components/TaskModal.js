function TaskModal() {

    return <>
        <div className="modal fade" id="addTaskModal" tabIndex="-1" aria-labelledby="addTaskModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addTaskModalLabel">Add New Task</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="taskTitle">Title</label>
                                <input type="text" className="form-control" id="taskTitle"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="taskDescription">Description</label>
                                <textarea className="form-control" id="taskDescription" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="taskDate">Date</label>
                                <input type="date" className="form-control" id="taskDate"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Add Task</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default TaskModal