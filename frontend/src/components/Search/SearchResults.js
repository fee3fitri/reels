import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom';
import { loadProducts, searchProducts } from '../../store/products';
import Footer from '../Footer';
import Marquee from '../Marquee/Marquee';
import ProductListing from '../ProductListing';
import Suggestions from '../ProductSuggestions';
import './Search.css';

const SearchResults = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const products = useSelector(loadProducts);
  const { query } = location.state || {};

  useEffect(() => {
    dispatch(searchProducts(query));
  }, [dispatch, query]);

  if (Array.isArray(products[0])) return null;

  const results = () => {
    if (products.length === 0) {
      return (
        <div className='results_content flex-col align-center'>
          <h2>There is no search results for '{query}'</h2>
          <p>Want to explore our collections?</p>
          <div className='search_buttons flex-row'>
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
        <div className='results_content flex-col align-center'>
          <h2>Search results for: '{query}'</h2>
          <p>{products.length} {products.length === 1 ? 'result' : 'results'} have been found</p>
          <div className='results_item_container grid'>
            {products?.map(product => <ProductListing key={product.id} product={product} />)}
          </div>
        </div>
      )
    }
  }

  return (
    <section className='page_wrapper'>
      <div className='search_component'>
        <h3 className='text-center'>SEARCH RESULTS</h3>
        {results()}
        <Marquee />
        <Footer />
      </div>
    </section>
  )
}

export default SearchResults;