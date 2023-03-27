import { toggled } from "../action";

const updateStatus = (todoId, status) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://todos-server-vxdl.onrender.com/todos/${todoId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          complete: !status,
        }),
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await response.json();

    dispatch(toggled(todo.id));
  };
};

export default updateStatus;
