import { Link } from 'react-router-dom';
import './Cart.css'

const Checkout = () => {
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
      <Link to="/">
        <p className='go_main'>Go to the main page</p>
      </Link>
    </div>
  )
}

export default Checkout;