import ToDoLIst from "./ToDoLIst";
import TaskModal from "./TaskModal";
import {FaPlus} from "react-icons/fa";
import Menu from "./Menu";

function Board({boardBackground}) {

    const buttonPlus = {
        position: 'fixed',
        bottom: '15px',
        right: '15px'
    }

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-3">
                    <Menu></Menu>
                </div>
                <div className="col-md-12" style={boardBackground}>
                    <ToDoLIst></ToDoLIst>
                </div>
            </div>
            <div style={buttonPlus} className="fixed-bottom-right">
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#addTaskModal">
                    <FaPlus/>
                </button>
            </div>
            <TaskModal></TaskModal>
        </div>
    )
}
export default Board