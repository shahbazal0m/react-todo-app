import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateTodo = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const { 
        register, 
        handleSubmit, 
        reset, 
        formState:{errors},
    } = useForm(); //register, handleSubmit, reset, formState:{errors} yee sab nikalee hai react-hook-form see

  const submitHandler = (data) => {
    data.isCompleted = false;
    data.id = nanoid();

    const copytodos = [...todos];
    copytodos.push(data);
    settodos(copytodos);

    toast.success("Todo created successfully!");

    reset();
  };

//   console.log(errors.title?.message);

  return (
    <div className="w-[70%] p-10">
      <h1 className="mb-10 text-5xl font-thin">
        Set <span className="text-red-400">Reminders</span> for <br />
        tasks!
      </h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
            {...register("title", {required:"title can not be empty"})}
            className="p-2 border-b w-full text-2xl font-thin outline-0"
            type="text"
            placeholder="title"
        />
        {/* {errors && errors.title && errors.title.message && (<small>{errors.title.message}</small>)} */}
        <small className="font-thin text-red-400">{errors?.title?.message}</small>
        <br />
        <br />
        <button className="mt-5 text-xl px-10 py-2 border rounded cursor-pointer">
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
