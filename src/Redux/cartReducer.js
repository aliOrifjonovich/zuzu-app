const Add = "ADD";
const CLEAR = "CLEAR";
const DELETE = "DELETE";
const SAVE = "SAVE";

const intialState = [];

export const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case Add:
      console.log(state);
      return [action.newCart, ...state];
    case CLEAR:
      return [];
    case DELETE:
      return state.filter((cart) => cart.id !== action.id);
    case SAVE:
      const singleProduct = state.find((cart) => cart.id === action.id);
      if (action.progress === "minus") {
        if (singleProduct.counter == 1) {
          return state.filter((cart) => cart.id !== action.id);
        } else {
          singleProduct.counter = action.value - 1;
          return [...state];
        }
      }
      if (action.progress === "plus") {
        singleProduct.counter = action.value + 1;
        return [...state];
      }
    default:
      return state;
  }
};
export const AddAction = (newCart) => {
  return {
    type: Add,
    newCart,
  };
};

export const ClearAction = () => {
  return {
    type: CLEAR,
  };
};
export const DeleteAction = (id) => {
  return {
    type: DELETE,
    id,
  };
};

export const SaveAction = (id, value, progress) => {
  return {
    type: SAVE,
    id,
    value,
    progress,
  };
};
