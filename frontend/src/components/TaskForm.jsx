// src/components/TaskForm.jsx
import { useEffect, useState } from 'react';

export default function TaskForm({ onAdd, onUpdate, editingTask, onCancelEdit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // When editingTask changes, populate the form
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title || '');
      setDescription(editingTask.description || '');
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingTask) {
      onUpdate(editingTask.id, { title: title.trim(), description: description.trim() });
    } else {
      onAdd({ title: title.trim(), description: description.trim() });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={{color:'blue'}}>{editingTask ? 'Edit Task' : 'Add Task'}</h2>
      <input
        style={styles.input}
        placeholder="Task title *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        style={styles.textarea}
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div style={styles.row}>
        <button type="submit" style={styles.buttonPrimary}>
          {editingTask ? 'Update' : 'Add'}
        </button>
        {editingTask && (
          <button type="button" onClick={onCancelEdit} style={styles.buttonGhost}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

const styles = {
  form: { display: 'grid', gap: 8, padding: 12, border: '1px solid #e5e5e5', borderRadius: 12, background: '#fff' },
  input: { padding: 10, borderRadius: 8, border: '1px solid #ddd' },
  textarea: { padding: 10, borderRadius: 8, border: '1px solid #ddd', minHeight: 80, resize: 'vertical' },
  row: { display: 'flex', gap: 8 },
  buttonPrimary: { padding: '8px 12px', borderRadius: 8, border: 'none', background: '#1f6feb', color: '#fff', cursor: 'pointer' },
  buttonGhost: { padding: '8px 12px', borderRadius: 8, border: '1px solid #ccc', background: 'transparent', color: 'red', cursor: 'pointer' },
};

