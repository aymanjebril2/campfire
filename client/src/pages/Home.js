import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const [isLog, setLog] = useState(false);

  const handleButtonGoTocabin = () => {
    const getUser = localStorage.getItem("user-info");
    if (getUser) {
      history.push("/cabin");
      setLog((go) => !go);
    } else {
      history.push("/login");
    }
  };
  // useEffect(() => {}, [isLog]);
  return (
    <div>
      <h1> Home </h1>
      <h1> Home </h1>
      <h1> Home </h1>
      <h1> Home </h1>
      <button onClick={handleButtonGoTocabin}> go to capin</button>
      <h1> Home </h1>
      <h1> Home </h1>
    </div>
  );
};

export default Home;
