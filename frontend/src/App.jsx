// src/App.jsx
import { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from './api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function load() {
    try {
      setLoading(true);
      const data = await fetchTasks();
      // sort newest first by id
      data.sort((a, b) => b.id - a.id);
      setTasks(data);
    } catch (e) {
      setError(e.message || 'Failed to load tasks');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function handleAdd({ title, description }) {
    try {
      const created = await createTask({ title, description });
      setTasks((prev) => [created, ...prev]);
    } catch (e) {
      setError(e.message || 'Failed to create task');
    }
  }

  async function handleUpdate(id, payload) {
    try {
      const updated = await updateTask(id, payload);
      setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));
      setEditingTask(null);
    } catch (e) {
      setError(e.message || 'Failed to update task');
    }
  }

  async function handleToggle(task) {
    await handleUpdate(task.id, { completed: !task.completed });
  }

  async function handleDelete(id) {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (e) {
      setError(e.message || 'Failed to delete task');
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={{ margin: 0 }}>Task Tracker</h1>
          <div style={{ color: '#666' }}>Flask + React + Postgres</div>
        </header>

        {error && <div style={styles.error} role="alert">{error}</div>}

        <TaskForm
          editingTask={editingTask}
          onAdd={handleAdd}
          onUpdate={handleUpdate}
          onCancelEdit={() => setEditingTask(null)}
        />

        <section style={{ display: 'grid', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h2 style={{ margin: 0 }}>Your Tasks</h2>
            {loading && <span>Loading…</span>}
          </div>
          <TaskList
            tasks={tasks}
            onToggle={handleToggle}
            onEdit={setEditingTask}
            onDelete={handleDelete}
          />
        </section>
      </div>
    </div>
  );
}

const styles = {
  page: { minHeight: '100vh', background: '#0d1117', padding: '24px 12px' },
  container: { maxWidth: 760, margin: '0 auto', display: 'grid', gap: 16 },
  header: { color: '#fff', padding: 12, borderRadius: 12, background: '#161b22', border: '1px solid #30363d' },
  error: { padding: 10, borderRadius: 8, background: '#fee', border: '1px solid #f4c2c2', color: '#900' },
};

