import { allCompleted } from "../action";

const updateCompleteAll = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("https://todos-server-vxdl.onrender.com/todos");
      const data = await res.json();
      const filterData = await data.filter((todo) => !todo.complete);
      try {
        if (filterData.length > 0) {
          filterData.forEach(async (todo) => {
            console.log(todo.id);
            try {
              await fetch(
                `https://todos-server-vxdl.onrender.com/todos/${todo.id}`,
                {
                  method: "PATCH",
                  body: JSON.stringify({
                    complete: !todo.complete,
                  }),
                  headers: {
                    "content-type": "application/json; charset=UTF-8",
                  },
                }
              );
            } catch (error) {
              console.log("Server side error", error.message);
            }
          });
          dispatch(allCompleted());
        }
      } catch (error) {
        console.log("Second phase", error);
      }
    } catch (error) {
      console.log("First phase", error);
    }
  };
};

export default updateCompleteAll;
