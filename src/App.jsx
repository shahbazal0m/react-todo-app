import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import ReadTodoList from "./components/ReadTodoList";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "Kaam kar lee bhai", isCompleted: false },
  ]);

  return (
    <div className="text-white flex w-screen h-screen bg-gray-800 p-10">
      <CreateTodo todos={todos} settodos={settodos} />
      <ReadTodoList todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
