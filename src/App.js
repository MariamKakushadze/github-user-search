import Header from "./components/header";
import Search from "./components/search";
import "./App.css";
import UserInfo from "./components/useInfo";
function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <UserInfo />
    </div>
  );
}

export default App;
