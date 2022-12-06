import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { removeCartItem } from '../../store/cart_item';
import './Cart.css'

const Checkout = ({showModal, setShowModal}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector(state => Object.values(state.cartItems));

  const emptyCart = () => {
    history.push('/');
    cartItems.map(cartItem => dispatch(removeCartItem(cartItem.id)));
    setShowModal(false);
  }

  return (
    <div className="checkout_modal flex-col align-center">
      <h1>Thank you</h1>
      <p className='checkout'>{('for checking out my website').toUpperCase()}</p>
      <p>Feel free to check out my links to see another project.</p>
      <div className="checkout_link">
        <Link to={{ pathname: "https://www.linkedin.com/in/safitri-shelton/" }} target="_blank">
          <i className="fa-brands fa-github"></i>
        </Link>
        <Link to={{ pathname: "https://www.linkedin.com/in/safitri-shelton/" }} target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </Link>
      </div>
      <p className='go_main'
          onClick={emptyCart}>
          Go to the main page
        </p>
    </div>
  )
}

export default Checkout;