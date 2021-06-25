import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Cabin = () => {
  const history = useHistory();
  const [isLog, setLog] = useState(false);

  const handleLogout = () => {
    const getUser = localStorage.removeItem("user-info");
    if (getUser) {
      history.push("/login");
      setLog((go) => !go);
    } else {
      history.push("/login");
    }
  };
  return (
    <div>
      <h1>this cabin</h1>
      <h1>this cabin</h1>
      <h1>this cabin</h1>
      <h1>this cabin</h1>
      <h1>this cabin</h1>
      <h1>this cabin</h1>
      <button onClick={handleLogout}>logout</button>
      <h1>this cabin</h1>
    </div>
  );
};

export default Cabin;
