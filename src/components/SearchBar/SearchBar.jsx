import c from "./SearchBar.module.css";
export default function SearchBar({ inputValue, handleQuery, setInputValue }) {
  return (
    <header className={c.header}>
      <form onSubmit={handleQuery}>
        <input
          className={c.input_query}
          value={inputValue}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
