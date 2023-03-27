import { colorSelected } from "../action";

const updateColor = (todoId, color) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://todos-server-vxdl.onrender.com/todos/${todoId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          color: color,
        }),
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await response.json();

    dispatch(colorSelected(todo.id, todo.color));
  };
};

export default updateColor;
