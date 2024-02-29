import {FaEdit, FaTrash, FaBookmark} from "react-icons/fa";

function ToDoItem() {
    return (
        <div className="col-md-3">
            <div className="card text-white bg-dark m-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                    Header
                    <div className="float-right">
                        <a href="#" className="m-1 text-white-50"><FaBookmark className="mr-2"/></a>
                        <a href="#" className="text-white m-1"><FaEdit className="mr-2"/></a>
                        <a href="#" className="text-white m-1"><FaTrash/></a>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Dark card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-footer justify-content-end">
                    <small className="text-white-50">29/05/2023 | 23:55</small>
                </div>
            </div>
        </div>
        /*<div className="col-md-3 m-auto">
            <div className="card m-4">
                <div className="card-header">
                    Task Title
                    <div className="float-right">
                        <a href="#"><i className="fas fa-edit mr-2"></i></a>
                        <a href="#"><i className="fas fa-trash"></i></a>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">Task Description</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Task Date</small>
                </div>
            </div>
        </div>*/
    )
}
export default ToDoItem