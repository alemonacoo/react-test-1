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

  return (
    <div className="container">
      <Header title="Hello From HEADER" />
      {/* <Header />  HEADER DI DEFAULT SENZA PROPS*/}
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
