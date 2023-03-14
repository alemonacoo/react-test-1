import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "Doctor's appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: "2",
      text: "Meeting at School",
      day: "Feb 7th at 6:30pm",
      reminder: false,
    },
    {
      id: "3",
      text: "House Party",
      day: "Feb 5th at 9:30pm",
      reminder: true,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete", id);
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log(id);
  };

  return (
    <div className="container">
      <Header title="Task Manager - React Test 1" />
      {/* <Header />  HEADER DI DEFAULT SENZA PROPS*/}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
};

export default App;
