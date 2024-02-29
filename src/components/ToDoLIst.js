import ToDoItem from "./ToDoItem";

function ToDoLIst() {
        const itemsArray = Array.from({ length: 15 });
        return (
            <div className="row">
                    {/* Use map to render ToDoItem components */}
                    {itemsArray.map((_, index) => (
                        <ToDoItem key={index} />
                    ))}
            </div>
        );
}
export default ToDoLIst