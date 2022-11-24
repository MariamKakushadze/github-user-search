import Header from "./components/header";
import Search from "./components/search";
import "./App.css";
import UserInfo from "./components/useInfo";
import React, { useState } from "react";
function App() {
  const [theme, setTheme] = useState(false);

  return (
    <div className="App" style={{ background: theme ? "#F2F2F2" : "#141D2F" }}>
      <div className="container">
        <Header theme={theme} setTheme={setTheme} />
        <Search theme={theme} setTheme={setTheme} />
        <UserInfo theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}

export default App;
