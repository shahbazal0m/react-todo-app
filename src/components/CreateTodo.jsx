import { nanoid } from "nanoid";

import { useState } from "react";

const CreateTodo = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;

    const [title, settitle] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const newtodo = {
            id: nanoid(),
            title: title,
            isCompleted: false,
        };

        let copytodos = [...todos];
        copytodos.push(newtodo);
        settodos(copytodos);

        // settodos([...todos, newtodo])

        settitle("");
    };


// internal CSS
    const buttoncss={
        color: "white",
        padding: "5px 10px",
        backgroundColor: "transparent",
        border:"1px solid white",
        borderRadius: "5px",
        cursor: "pointer"
    };

    return (
        <>
            <h1>Create Tasks</h1>
            <form onSubmit={submitHandler}>
                <input
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="title"
                />
                <br />
                <br />
                {/* internal CSS nicche button par use kiyee hai */}
                <button style={buttoncss}>Create Todo</button>
            </form>
        </>
    );
};

export default CreateTodo;
