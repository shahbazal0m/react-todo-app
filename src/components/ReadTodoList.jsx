import { Fragment } from "react";

const ReadTodoList = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const rendertodos = todos.map((todo) => {
    return(
        <li 
            // inline css
            style={{color: todo.isCompleted ? "green" : "tomato"}} 
            key={todo.id}
        >
            {todo.title}
        </li>
    );
  });

  return (
    <Fragment>
      {/* inline css */}
      <h1 style={{color: "tomato"}}>Pending Todos</h1>
      <ol>{rendertodos}</ol>
    </Fragment>
  );
};

export default ReadTodoList;
