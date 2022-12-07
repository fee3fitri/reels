import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Search.css';

const SearchBar = () => {
  const history = useHistory();
  const [query, setQuery] = useState('');

  const handleSearch = e => {
    e.prevenrDefault();
    history.push(`/search/${query}`);
    setQuery('');
  }

  return (
    <div className="search_bar_wrapper flex-row align-center">
      <form onSubmit={handleSearch}>
        <input type="text"
          className='search'
          value={query}
          placeholder="&#xF002; Search product"
          onChange={e => setQuery(e.target.value)} />
      </form>
    </div>
  )
}

export default SearchBar;