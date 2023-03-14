import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTask from "./components/AddTask";
import About from "./components/About";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

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
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <Router>
      <div className="container">
        <Header
          title="Task Manager - React Test 1"
          onAdd={() => {
            setShowAddTask(!showAddTask);
          }}
          showAdd={showAddTask}
        />
        {/* <Header />  HEADER DI DEFAULT SENZA PROPS*/}

        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No Tasks to show"
                )}
              </>
            }
          />
          <Route path="/about" Component={About} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
