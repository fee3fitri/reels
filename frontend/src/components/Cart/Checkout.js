import './Cart.css'

const Checkout = () => {
  return (
    <div className="checkout_modal flex-col align-center">
      <h1>Thank you</h1>
      <p className='checkout'>{('for checking out my website').toUpperCase()}</p>
      <p>Feel free to check out my links to see another project.</p>
      <div className="checkout_link">
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-github"></i>
      </div>
    </div>
  )
}

export default Checkout;