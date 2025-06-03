import { useState } from "react";

const TodoForm = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        title: "",
        priority: "Medium",
        completed: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title.trim()) return;
        onAdd(formData);
        setFormData({ title: '', priority: 'Medium', completed: false });
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input 
                type="text" 
                value={formData.title} 
                onChange={(e) => setFormData({...formData, title: e.target.value})} 
                placeholder="Nhập công việc mới" 
                className="todo-input"
            />
            <select 
                value={formData.priority} 
                onChange={(e) => setFormData({...formData, priority: e.target.value})} 
                className="todo-select"
            >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button type="submit" className="todo-button">Thêm</button>
        </form>
    )
}

export default TodoForm;