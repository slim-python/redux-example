import React from "react";
import { useSelector } from "react-redux";
const User = () => {
  const data = useSelector((state) => state.testReducer);
  console.log(data);
  return <div>{data.name}</div>;
};

export default User;
