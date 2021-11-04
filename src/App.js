import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const PageContext = React.createContext();

function App() {
  const [activepage, setActivepage] = useState("register");
  return (
    <PageContext.Provider value={setActivepage}>
      <Router>
        <div className="App">
          <Header activepage={activepage} />
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={SignIn} />
        </div>
      </Router>
    </PageContext.Provider>
  );
}

export default App;
