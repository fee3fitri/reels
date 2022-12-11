import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Search.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    history.push({
      pathname: '/search-results', 
      state: {query}
    });
    setQuery("");
  }

  return (
    <div className="search_bar_wrapper flex-row align-center">
      <form className='search_form flex-row align-center'
        onSubmit={handleSubmit}>
        <input type="search"
          value={query}
          placeholder="Search product"
          autoComplete='off'
          onChange={e => setQuery(e.target.value)} />
        <Link to={{
          pathname: '/search-results', 
          state: {query}
        }}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </Link>
      </form>
    </div>
  )
}

export default SearchBar;