import { SAVE } from "../../constants/actionTypes";

const initialState = { name: "" };
const testReducer = (state = initialState, action) => {
  //   if (action.type === "SAVE") {
  //   } else if (action.type === "DELETE") {
  //   }

  switch (action.type) {
    case SAVE:
      return { name: action.payload };
    case "DELETE":
      return state;
    default:
      return state;
  }
};

export default testReducer;
