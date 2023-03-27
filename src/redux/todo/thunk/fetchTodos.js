import { loadedTodo } from "../action";

const fetchTodo = async (dispatch) => {
  const response = await fetch("https://todos-server-vxdl.onrender.com/todos");
  const todo = await response.json();

  dispatch(loadedTodo(todo));
};

export default fetchTodo;
