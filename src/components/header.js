import "./header.css";
import Sun from "../assets/icon-sun.svg";
import Moon from "../assets/icon-moon.svg";
export default function Header({ theme, setTheme }) {
  const changeTheme = () => {
    setTheme((prev) => !prev);
  };
  return (
    <>
      <header className="App-header">
        <h1 style={{ color: theme ? "#222731" : "#FFF" }}>devfinder</h1>
        <div className="theme" onClick={changeTheme}>
          <span style={{ color: theme ? "#4B6A9B" : "#FFF" }}>
            {theme ? "DARK" : "LIGHT"}
          </span>
          <img src={theme ? Moon : Sun} alt="moon" />
        </div>
      </header>
    </>
  );
}
