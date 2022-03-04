import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { displayName } from "./redux/actions/nameAction";

const Abc = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(displayName(name));
    console.log(name);
  });

  return (
    <div className="App">
      <header className="App-header">Learn React {name}</header>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <button> Save </button>
    </div>
  );
};

export default Abc;
