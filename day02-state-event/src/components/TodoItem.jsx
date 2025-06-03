const TodoItem = ({ todo, onDelete, onToggle }) => {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                className="todo-checkbox"
            />
            <span 
                className={`todo-title ${todo.completed ? 'completed' : ''}`}
            >
                {todo.title}
            </span>
            <span className={`priority priority-${todo.priority.toLowerCase()}`}>
                {todo.priority}
            </span>
            <button 
                onClick={() => onDelete(todo.id)}
                className="delete-button"
            >
                Xóa
            </button>
        </div>
    )
}

export default TodoItem;