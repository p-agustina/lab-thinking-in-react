function SearchBar({ setQuery, setInStock }) {
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleInStock = (e) => {
    setInStock(e.target.checked);
  };

  return (
    <div className="SearchContainer">
      <input type="text" onChange={handleSearch} />
      <input type="checkbox" onChange={handleInStock} />
      Show only products in stock
    </div>
  );
}

export default SearchBar;
