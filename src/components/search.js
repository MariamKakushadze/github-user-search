import "./search.css";
import searchIcon from "../assets/icon-search.svg";

export default function Search() {
  return (
    <>
      <form>
        <label htmlFor="search">
          <img src={searchIcon} alt="search" />
          <input
            type="search"
            id="search"
            placeholder="Search GitHub username..."
          />
        </label>
        {/* <span className="error">no result</span> */}
        <button type="submit">Search</button>
      </form>
    </>
  );
}
