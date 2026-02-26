function TaskList({ tasks, message }) {
  return (
    <div className="card p-4">
      <h4>Task List</h4>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>

      <p className="mt-3">{message}</p>
    </div>
  );
}

export default TaskList;