import { COLORCHANGE, STATUSCHANGE } from "./actionType";

const initialState = {
  status: "all",
  color: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLORCHANGE:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            color: [...state.color, color],
          };
        case "removed":
          return {
            ...state,
            color: state.color.filter((clr) => clr !== color),
          };

        default:
          return state;
      }
    case STATUSCHANGE:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
