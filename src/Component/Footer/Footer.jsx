import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorChange, statusChange } from "../../redux/filter/action";

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const task = todos.filter((todo) => !todo.complete);
  const taskLeft = (arr) => {
    if (arr.length === 0) {
      return "0 task left";
    } else if (arr.length === 1) {
      return "1 task left";
    } else {
      return `${arr.length} tasks left`;
    }
  };

  const colorSelect = (ChooseColor) => {
    switch (ChooseColor) {
      case "green":
        if (filter.color.includes("green")) {
          return dispatch(colorChange(ChooseColor, "removed"));
        } else {
          return dispatch(colorChange(ChooseColor, "added"));
        }
      case "yellow":
        if (filter.color.includes("yellow")) {
          return dispatch(colorChange(ChooseColor, "removed"));
        } else {
          return dispatch(colorChange(ChooseColor, "added"));
        }
      case "red":
        return filter.color.includes("red")
          ? dispatch(colorChange(ChooseColor, "removed"))
          : dispatch(colorChange(ChooseColor, "added"));

      default:
        return ChooseColor;
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{taskLeft(task) + " --- | --- Total tasks " + todos.length}</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${filter.status === "all" && "font-bold"}`}
          onClick={() => dispatch(statusChange("all"))}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filter.status === "incomplete" && "font-bold"
          }`}
          onClick={() => dispatch(statusChange("incomplete"))}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filter.status === "complete" && "font-bold"
          }`}
          onClick={() => dispatch(statusChange("complete"))}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            filter.color.includes("green") && "bg-green-500"
          }`}
          onClick={() => colorSelect("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            filter.color.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => colorSelect("yellow")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            filter.color.includes("red") && "bg-red-500"
          }`}
          onClick={() => colorSelect("red")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
