import css from "./SearchBox.module.css";

const SearchBox = ({ onSearch, value }) => {
  return (
    <div className={css.searchBox}>
      <h3 className={css.searchTitle}>Find contacts by name</h3>
      <input
        className={css.searchInput}
        type="text"
        name="searchName"
        value={value}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
