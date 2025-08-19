// src/components/TaskItem.jsx
export default function TaskItem({ task, onToggle, onEdit, onDelete }) {
  return (
    <div style={styles.item}>
      <div style={styles.left}>
        <input
          type="checkbox"
          checked={!!task.completed}
          onChange={() => onToggle(task)}
          aria-label="Toggle completed"
        />
        <div style={{ marginLeft: 10 }}>
          <div style={{ ...styles.title, textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </div>
          {task.description && <div style={styles.desc}>{task.description}</div>}
          <div style={styles.meta}>Created at: {task.created_at}</div>
        </div>
      </div>
      <div style={styles.actions}>
        <button onClick={() => onEdit(task)} style={styles.actionBtn}>Edit</button>
        <button onClick={() => onDelete(task.id)} style={styles.deleteBtn}>Delete</button>
      </div>
    </div>
  );
}

const styles = {
  item: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: 12, border: '1px solid #eee', borderRadius: 12, background: '#fff' },
  left: { display: 'flex', alignItems: 'flex-start' },
  title: { fontWeight: 700, color: "black" },
  desc: { fontSize: 16, color: '#444' },
  meta: { fontSize: 12, color: '#777', marginTop: 4 },
  actions: { display: 'flex', gap: 8 },
  actionBtn: { padding: '6px 10px', borderRadius: 8, border: '2px solid #1AB3BD', background: 'transparent', cursor: 'pointer', color: '#1AB3BD' },
  deleteBtn: { padding: '6px 10px', borderRadius: 8, border: '2px solid #D9421C', background: '#fee', cursor: 'pointer', color: "#D9421C" },
};

