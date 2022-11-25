import Header from "./components/header";
import Search from "./components/search";
import "./App.css";
import UserInfo from "./components/useInfo";
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);
  const [searchUser, setSearchUser] = useState("octocat");
  const [result, setResult] = useState(true);

  return (
    <div className="App" style={{ background: theme ? "#F2F2F2" : "#141D2F" }}>
      <div className="container">
        <Header theme={theme} setTheme={setTheme} />
        <Search
          theme={theme}
          setSearchUser={setSearchUser}
          searchUser={searchUser}
          result={result}
        />
        <UserInfo
          theme={theme}
          searchUser={searchUser}
          result={result}
          setResult={setResult}
        />
      </div>
    </div>
  );
}

export default App;
