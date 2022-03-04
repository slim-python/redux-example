import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Abc from "./Abc";
import User from "./User";

function App() {
  return (
    <Routes>
      <Route index element={<Abc />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default App;
