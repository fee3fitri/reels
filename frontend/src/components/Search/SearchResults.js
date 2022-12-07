import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadProducts, searchProducts } from '../../store/products';
import Footer from '../Footer';
import Marquee from '../Marquee/Marquee';
import ProductListing from '../ProductListing';
import Suggestions from '../ProductSuggestions';
import './Search.css';

const SearchResults = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(loadProducts);

  useEffect(() => {
    dispatch(searchProducts(query));
  }, [dispatch, query])

  const results = () => {
    if (products.length === 0) {
      return (
        <div className='results_content'>
          <p>Oops, there is no search results for {query}</p>
          <p>Want to explore our collections?</p>
          <div className='flex-row'>
            <Link to="/collections/womens"
              className='btn flex-col align-center'>
              Women
            </Link>
            <Link 
              to="/collections/mens"
              className='btn flex-col align-center'>
              Men
            </Link>
          </div>
        </div>
      )
    } else {
      return (
        <div className='results_content'>
          <h2>Showing results for: <p>{query}</p></h2>

          <div className='results_item_container'>
            {products?.map(product => <ProductListing key={product.id} product={product} />)}
          </div>
        </div>
      )
    }
  }

  return (
    <div className='search_page_wrapper'>
      <h1>Your Search Results</h1>
      {results}
      <Marquee />
      <Suggestions />
      <Footer />
    </div>
  )
}

export default SearchResults;