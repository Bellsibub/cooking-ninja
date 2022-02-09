import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// styles
import './SearchBar.css';

const SearchBar = () => {
  const history = useHistory();
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    history.push(`/search?q=${searchText}`);
    setSearchText('');
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchText}
        placeholder="Search"
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={(e) => {
          e.key === 'Enter' && handleSearch();
        }}
      />
      <button className="stl_button" onClick={handleSearch}>
        <i className="fa fa-search icon"></i>
      </button>
    </div>
  );
};

export default SearchBar;
