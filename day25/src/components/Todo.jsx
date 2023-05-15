import "./Todo.css"



/**
 * Component - Todo
 * @param {string}  props.todo (required) Nội dung công việc
 * @param {boolean} props.completed Công việc hoàn thành hay chưa?
 * @returns 
 */
export function Todo(props) {

    const classTodo = (props.completed === true) ? "todo-complete" : "todo";

    return <div>
        <p className={classTodo}> {props.todo}</p>
    </div>
}

Todo.defaultProps = {
    completed: false,
    todo: "Chưa có nội dung"
}