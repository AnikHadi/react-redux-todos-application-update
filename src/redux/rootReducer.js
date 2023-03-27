import { combineReducers } from "redux";
import filterReducer from "./filter/filterReducer";
import todoReducer from "./todo/todoReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;
