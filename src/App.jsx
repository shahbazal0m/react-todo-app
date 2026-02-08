import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import ReadTodoList from "./components/ReadTodoList";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "Kaam hoo gayaa kiyaa bhai", isCompleted: false },
  ]);

  return (
    <>
      <CreateTodo todos={todos} settodos={settodos} />
      <ReadTodoList todos={todos} settodos={settodos} />
    </>
  );
};

export default App;
