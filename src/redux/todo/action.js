import {
  ADD_TODO,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLOR,
  DELETE_TODO,
  LOADED_TODO,
  TOGGLED,
} from "./actionType";

export const loadedTodo = (todoText) => {
  return {
    type: LOADED_TODO,
    payload: todoText,
  };
};

export const addTodo = (todoText) => {
  return {
    type: ADD_TODO,
    payload: todoText,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: COLOR,
    payload: {
      todoId,
      color,
    },
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
