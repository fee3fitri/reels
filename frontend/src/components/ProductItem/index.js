import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createCartItem, updateCartItem, fetchCartItems } from "../../store/cart_item";
import { fetchProduct, loadProduct } from "../../store/products";
import { Modal } from '../../context/Modal';
import ProductColor from "./ProductColor";
import ProductImages from "./ProductImages";
import ProductSize from "./ProductSize";
import ProductAccordion from "./ProductAccordion";
import Cart from "../Cart";
import './ProductItem.css'
import LoginFormModal from "../LoginFormModal";

const ProductItem = () => {
  const dispatch = useDispatch();
  const {productId} = useParams();
  const user = useSelector(state => state.session.user);
  const product = useSelector(loadProduct(productId));
  // const cartItem = useSelector(loadCartItem(productId));
  const [count, setCount] = useState(1);
  const [showModal, setShowModal] = useState(false);
  let sessionCart;

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  // useEffect(() => {
  //   if (user) {
  //     console.log();
  //     dispatch(fetchCartItems(user.id));
  //   }
  // }, [dispatch, productId, user]);

  
  if (!product) return null;


  const addToCart = e => {
    // debugger
    if (!user) return null;
    
    // if (!cartItem) { 
    //   const newItem = {
    //     cart_item: {
    //       userId: user.id,
    //       productId: productId,
    //       quantity: Number(count)
    //     }
    //   }
    //   return dispatch(createCartItem(newItem));
    // } else if (cartItem) {
    //   setCount(Number(count) + 1);
    //   const updatedItem = {
    //     cart_item: {
    //       // id: cartItem.id,
    //       // userId: user.id,
    //       // productId: productId,
    //       ...cartItem,
    //       quantity: Number(count)
    //     }
    //   }
    //   return dispatch(updateCartItem(updatedItem));
    // }

    const newItem = {
          cart_item: {
            userId: user.id,
            productId: productId,
            quantity: Number(count)
          }
        }
        return dispatch(createCartItem(newItem));
  }

  return (
    <>
      <div className="product_item_wrapper page_wrapper grid">
        <div className="product_wrapper grid">
          <div className="product_img_gallery grid">
            <ProductImages />
          </div>
          <div className="product_details_wrapper">
            <h1>{product.name}</h1>
            <h2>{`$${product.price}`}</h2>
            <p>{product.productPreview}</p>
            <ProductColor />
            <ProductSize />
            <div className="atc_area flex-col">
              <button 
                className="btn"
                onClick={()=> {
                  addToCart();
                  setShowModal(true);
                }}>
                Add to Cart
              </button>
              <p className="flex-row align-center justify-center">
                Buy now, pay later with 
                <svg 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 44 10">
                  <path 
                    d="M9.215 9.826h2.094V0H9.215v9.826Zm13.263-5.672V3.28h-1.972v6.562h1.972V6.405c0-.995 1.117-1.431 1.902-1.222h.018V3.281c-.803-.018-1.536.332-1.92.873Zm-6.736 4.153c-1.03 0-1.85-.785-1.85-1.763 0-.977.837-1.762 1.85-1.762 1.03 0 1.85.785 1.85 1.762 0 .978-.838 1.763-1.85 1.763Zm1.832-4.59a3.428 3.428 0 0 0-2.007-.628 3.452 3.452 0 0 0-3.455 3.456A3.463 3.463 0 0 0 15.567 10a3.6 3.6 0 0 0 2.007-.628v.454h1.71V3.264h-1.71v.453Zm11.745-.628c-.785 0-1.536.244-2.024.908v-.734h-1.972v6.563h1.972V6.23c0-.994.663-1.483 1.483-1.483.855 0 1.361.524 1.361 1.466v3.595h1.973V5.637c0-1.5-1.222-2.548-2.793-2.548Zm12.74 4.415c-.68 0-1.24.559-1.24 1.24 0 .68.56 1.239 1.24 1.239.68 0 1.239-.559 1.239-1.24 0-.698-.559-1.239-1.239-1.239Zm-5.637.803c-1.03 0-1.85-.785-1.85-1.763 0-.977.838-1.762 1.85-1.762 1.03 0 1.85.785 1.85 1.762.017.978-.82 1.763-1.85 1.763Zm1.85-4.59a3.429 3.429 0 0 0-2.007-.628 3.452 3.452 0 0 0-3.456 3.456A3.463 3.463 0 0 0 36.266 10a3.6 3.6 0 0 0 2.007-.628v.454h1.71V3.264h-1.71v.453Zm2.95-.331h.087c.052 0 .087.035.087.07 0 .052-.018.07-.087.07h-.088v-.14Zm0 .227h.087l.087.192h.087l-.087-.192c.052-.018.087-.07.087-.14 0-.087-.07-.157-.174-.157h-.175v.489h.087v-.192ZM0 9.826h2.182V0H0v9.826ZM7.784 0H5.672a5.815 5.815 0 0 1-3.176 5.079l3.263 4.747h2.653L5.445 5.515A7.882 7.882 0 0 0 7.784 0ZM41.29 3.176c.21 0 .384.175.384.384 0 .21-.174.384-.384.384a.387.387 0 0 1-.384-.384c0-.21.175-.384.384-.384Zm0 .855a.47.47 0 0 0 .471-.47.47.47 0 0 0-.47-.472.47.47 0 0 0-.472.471c0 .262.21.471.471.471Z"
                    fill="#fff">
                  </path>
                </svg>
                or 
                <svg 
                fill="none"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 63 12">
                  <path 
                    d="m61.777 2.422-1.88-1.076L57.99.254c-1.26-.723-2.837.184-2.837 1.64v.245c0 .136.07.261.19.326l.886.506a.367.367 0 0 0 .549-.321v-.581c0-.288.31-.468.56-.326l1.739 1 1.733.994c.25.141.25.505 0 .646l-1.733.995-1.74 1a.375.375 0 0 1-.559-.326v-.288c0-1.457-1.576-2.37-2.837-1.641l-1.907 1.092-1.88 1.076c-1.266.728-1.266 2.56 0 3.287l1.88 1.076 1.907 1.092c1.261.723 2.837-.184 2.837-1.64V9.86c0-.136-.07-.261-.19-.326l-.886-.506a.367.367 0 0 0-.549.321v.581c0 .289-.31.468-.56.327l-1.738-1-1.734-.995a.373.373 0 0 1 0-.646l1.734-.995 1.739-1c.25-.14.56.038.56.326v.288c0 1.457 1.575 2.37 2.836 1.641l1.907-1.092 1.88-1.076c1.266-.733 1.266-2.56 0-3.287ZM49.44 2.78l-4.4 9.091h-1.826l1.646-3.396-2.592-5.695h1.875l1.663 3.815L47.62 2.78h1.82ZM5.433 6.008c0-1.087-.788-1.848-1.755-1.848-.967 0-1.755.777-1.755 1.848 0 1.06.788 1.847 1.755 1.847.967 0 1.755-.76 1.755-1.847Zm.016 3.228v-.837c-.478.581-1.19.94-2.038.94C1.64 9.339.298 7.92.298 6.008c0-1.897 1.396-3.342 3.152-3.342.825 0 1.521.364 2 .93V2.78h1.586v6.456H5.449ZM14.751 7.801c-.554 0-.712-.206-.712-.75V4.189h1.022V2.78h-1.022V1.205h-1.624V2.78h-2.098v-.642c0-.543.207-.75.777-.75h.359V.14h-.783c-1.342 0-1.978.44-1.978 1.783v.864H7.79v1.402h.902v5.048h1.625V4.188h2.098V7.35c0 1.315.505 1.886 1.82 1.886h.837V7.801h-.32ZM20.59 5.427c-.114-.837-.799-1.342-1.603-1.342-.799 0-1.462.489-1.625 1.342h3.228Zm-3.244 1.005c.114.957.799 1.5 1.668 1.5.685 0 1.212-.32 1.521-.837h1.669c-.386 1.37-1.614 2.244-3.228 2.244-1.95 0-3.32-1.369-3.32-3.32 0-1.95 1.445-3.358 3.358-3.358 1.924 0 3.32 1.418 3.32 3.358 0 .142-.01.283-.038.413h-4.95ZM32.678 6.008c0-1.043-.788-1.847-1.756-1.847-.967 0-1.755.777-1.755 1.847 0 1.06.788 1.848 1.755 1.848.968 0 1.756-.799 1.756-1.848Zm-5.114 5.864V2.78h1.587v.837a2.565 2.565 0 0 1 2.038-.957c1.744 0 3.113 1.435 3.113 3.331 0 1.897-1.396 3.342-3.151 3.342-.816 0-1.484-.32-1.951-.864v3.396h-1.636v.006ZM40.026 6.008c0-1.087-.788-1.848-1.756-1.848-.967 0-1.755.777-1.755 1.848 0 1.06.788 1.847 1.755 1.847.968 0 1.756-.76 1.756-1.847Zm.016 3.228v-.837c-.478.581-1.19.94-2.038.94-1.771 0-3.113-1.418-3.113-3.331 0-1.897 1.396-3.342 3.151-3.342.826 0 1.522.364 2 .93V2.78h1.587v6.456h-1.587ZM24.701 3.411s.402-.75 1.397-.75c.423 0 .695.147.695.147v1.646s-.598-.37-1.146-.293c-.55.076-.897.576-.897 1.25v3.82h-1.641V2.78h1.587v.63h.005Z" 
                    fill="#fff">
                  </path>
                </svg>
              </p>
            </div>
            <ProductAccordion />
          </div>
        </div>
      </div>
      
      {showModal && (
        <div className="cart_modal_wrapper">
          <Modal
            onClose={() => setShowModal(false)}>
            {user ? <Cart /> : (
              <div className='cart_modal_login flex-col'>
                <h1>Your cart</h1>
                <p>Login to see your cart items</p>
                <LoginFormModal />
              </div>
            )}
          </Modal>
        </div>
      )}
    </>
  )
}

export default ProductItem;