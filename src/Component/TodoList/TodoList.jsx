import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodo from "../../redux/todo/thunk/fetchTodos";
import Todo from "../Todo/Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filters);
  const { status, color } = filter;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo);
  }, [dispatch]);

  const filterByStatus = (todo) => {
    switch (status) {
      case "complete":
        return todo.complete;
      case "incomplete":
        return !todo.complete;
      default:
        return true;
    }
  };

  const filterByColors = (todo) => {
    if (color.length > 0) {
      return color.includes(todo?.color);
    }
    return true;
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
};

export default TodoList;

// (todo) => {
//   if (
//     filter.color.includes("green") &&
//     filter.color.includes("yellow") &&
//     filter.color.includes("red")
//   ) {
//     return todo;
//   } else if (
//     filter.color.includes("green") &&
//     filter.color.includes("yellow")
//   ) {
//     return todo.color !== "red";
//   } else if (
//     filter.color.includes("red") &&
//     filter.color.includes("yellow")
//   ) {
//     return todo.color !== "green";
//   } else if (
//     filter.color.includes("green") &&
//     filter.color.includes("red")
//   ) {
//     return todo.color !== "yellow";
//   } else if (filter.color.includes("yellow")) {
//     return todo.color === "yellow";
//   } else if (filter.color.includes("green")) {
//     return todo.color === "green";
//   } else if (filter.color.includes("red")) {
//     return todo.color === "red";
//   } else {
//     return todo;
//   }
// }
