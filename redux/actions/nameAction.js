import { SAVE } from "../../constants/actionTypes";

export const displayName = (name) => {
  console.log("Display Name", name);
  return {
    type: SAVE,
    payload: name,
  };
};
