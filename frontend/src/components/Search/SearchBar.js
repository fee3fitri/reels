import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Search.css';

const SearchBar = () => {
  const history = useHistory();
  const [query, setQuery] = useState('');

  // const handleSearch = e => {
  //   e.preventDefault();
  //   history.push(`/search/${query}`);
  //   setQuery('');
  // }

  return (
    <div className="search_bar_wrapper flex-row align-center">
      <form className='flex-row align-center'>
        <input type="search"
          value={query}
          placeholder="Search product"
          onChange={e => setQuery(e.target.value)} />
        <Link to={{
          pathname: '/search-results', 
          state: {query, fromApp: true}
        }}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </Link>
      </form>
    </div>
  )
}

export default SearchBar;