import { deleteTodo } from "../action";

const updateDeleteTodo = (todoId) => {
  return async (dispatch) => {
    await fetch(`https://todos-server-vxdl.onrender.com/todos/${todoId}`, {
      method: "DELETE",
    });

    dispatch(deleteTodo(todoId));
  };
};

export default updateDeleteTodo;
