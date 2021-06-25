import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Header from "./components/Header/Header";
import Cabin from "./pages/Cabin";

function App() {
  const getUser = localStorage.getItem("user-info");
  console.log(getUser);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cabin" component={Cabin} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
