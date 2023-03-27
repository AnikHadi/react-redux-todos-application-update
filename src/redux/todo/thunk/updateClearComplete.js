import { clearCompleted } from "../action";

const updateClearComplete = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("https://todos-server-vxdl.onrender.com/todos");
      const data = await res.json();
      const filterData = await data.filter((todo) => todo.complete);
      try {
        if (filterData.length > 0) {
          filterData.forEach(async (todo) => {
            try {
              await fetch(
                `https://todos-server-vxdl.onrender.com/todos/${todo.id}`,
                {
                  method: "DELETE",
                }
              );
            } catch (error) {
              console.log("Server side error", error.message);
            }
          });
          dispatch(clearCompleted());
        }
      } catch (error) {
        console.log("Second phase", error);
      }
    } catch (error) {
      console.log("First phase", error);
    }
  };
};

export default updateClearComplete;
