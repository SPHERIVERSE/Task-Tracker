// src/components/TaskList.jsx
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggle, onEdit, onDelete }) {
  if (!tasks.length) {
    return <div style={{ color: '#666', padding: 12 }}>No tasks yet. Add your first task!</div>;
  }
  return (
    <div style={{ display: 'grid', gap: 10 }}>
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} onToggle={onToggle} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

