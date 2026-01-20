import { useState } from "react";
function Ques2() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };
  return (
    <div>
      <h2>To-Do SPA</h2>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
export default Ques2;
