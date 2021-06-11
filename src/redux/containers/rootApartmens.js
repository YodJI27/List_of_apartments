import { APARTMENS } from "../types";

const initialState = {
  apartment: [],
};

const ApartmensList = (state = initialState, action) => {
  switch (action.type) {
    case APARTMENS:
      return {
        ...state,
        apartment: action.payload,
      };
    default:
      return state;
  }
};

export default ApartmensList;
