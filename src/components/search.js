import "./search.css";
import searchIcon from "../assets/icon-search.svg";

export default function Search({ theme, setSearchUser, result }) {
  const searchHandler = (e) => {
    e.preventDefault();
    setSearchUser(e.target.search.value);
  };
  return (
    <>
      <form onSubmit={searchHandler} autoComplete="off">
        <label htmlFor="search">
          <img src={searchIcon} alt="search" />
          <input
            type="search"
            id="search"
            placeholder="Search GitHub username..."
            style={{
              background: theme ? "#FFF" : "#1e2a47",
              color: theme ? "#1e2a47" : "#FFF",
            }}
          />
        </label>
        <span className="error">{!result ? "no result" : ""}</span>
        <button type="submit">Search</button>
      </form>
    </>
  );
}
