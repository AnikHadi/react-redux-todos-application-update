import {
  ADD_TODO,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLOR,
  DELETE_TODO,
  LOADED_TODO,
  TOGGLED,
} from "./actionType";
import initialState from "./initialState";

const nextId = (todos) => {
  const maxId = todos.reduce((maxID, todo) => Math.max(maxID, todo.id), 0);
  return maxId + 1;
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED_TODO:
      return action.payload;

    case ADD_TODO:
      return [
        ...state,
        {
          id: nextId(state),
          text: action.payload,
          complete: false,
          color: "",
        },
      ];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case COLOR:
      return state.map((todo) => {
        if (todo.id !== action.payload.todoId) {
          return todo;
        } else {
          return {
            ...todo,
            color: action.payload.color,
          };
        }
      });

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        } else {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
      });

    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          complete: true,
        };
      });
    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.complete);

    default:
      return state;
  }
};

export default todoReducer;
