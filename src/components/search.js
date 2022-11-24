import "./search.css";
import searchIcon from "../assets/icon-search.svg";

export default function Search({ theme }) {
  return (
    <>
      <form>
        <label htmlFor="search">
          <img src={searchIcon} alt="search" />
          <input
            type="search"
            id="search"
            placeholder="Search GitHub username..."
            style={{ background: theme ? "#FFF" : "#1e2a47" }}
          />
        </label>
        {/* <span className="error">no result</span> */}
        <button type="submit">Search</button>
      </form>
    </>
  );
}
