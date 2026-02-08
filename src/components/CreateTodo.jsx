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


    return (
        <div className="w-[70%] p-10">
            <h1 className="mb-10 text-5xl font-thin">
                Set <span className="text-red-400">Reminders</span> for <br />tasks!
            </h1>
            <form onSubmit={submitHandler}>
                <input
                    className="p-2 border-b w-full text-2xl font-thin outline-0"
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="title"
                />
                <br />
                <br />
                <button className="mt-5 text-xl px-10 py-2 border rounded cursor-pointer">Create Todo</button>
            </form>
        </div>
    );
};

export default CreateTodo;
