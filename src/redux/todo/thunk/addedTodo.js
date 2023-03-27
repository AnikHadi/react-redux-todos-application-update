import { addTodo } from "../action";

const addedTodo = (inputText) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://todos-server-vxdl.onrender.com/todos",
      {
        method: "POST",
        body: JSON.stringify({
          text: inputText,
          complete: false,
        }),
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await response.json();

    dispatch(addTodo(todo.text));
  };
};

export default addedTodo;
