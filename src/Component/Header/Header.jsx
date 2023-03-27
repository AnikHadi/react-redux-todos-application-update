import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addedTodo from "../../redux/todo/thunk/addedTodo";
import updateClearComplete from "../../redux/todo/thunk/updateClearComplete";
import updateCompleteAll from "../../redux/todo/thunk/updateCompleteAll";
import tick from "../assets/images/double-tick.png";
import notes from "../assets/images/notes.png";
import plus from "../assets/images/plus.png";

const Header = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addedTodo(inputText));
    e.target.reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={notes} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          onChange={(e) => setInputText(e.target.value)}
          required
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${plus})] bg-no-repeat bg-contain`}
          // onClick={() => console.log("first")}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={() => dispatch(updateCompleteAll())}
          className="flex space-x-1 cursor-pointer"
        >
          <img className="w-4 h-4" src={tick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li
          onClick={() => dispatch(updateClearComplete())}
          className="cursor-pointer"
        >
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
