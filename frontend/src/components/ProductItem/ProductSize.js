import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, loadProduct, toggleSize } from "../../store/products";
import { Modal } from "../../context/Modal";
import SizeModal from "./SizeModal";
import './ProductItem.css'

const ProductSize = () => {
  const {productId} = useParams();
  const dispatch = useDispatch();
  const product = useSelector(loadProduct(productId));
  const [size, setSize] = useState();
  const [showModal, setShowModal] = useState(false);
  const sizes = product.size.split(' ');

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  const handleSize = e => {
    setSize(e.target.value);
  }

  if (!product) return null;
  
  return (
    <>
      <form className="product_size_wrapper">
        <div className="flex-row justify-between align-center">
          <h3>Size {size} US</h3>
          <p onClick={() => setShowModal(true)}>
            <i className="fa-solid fa-ruler-horizontal"></i> Size Chart
          </p>
        </div>
        <ul className="flex-row">
          {sizes.map(size => (
            <li>
              <input type="radio"
                name="size"
                value={size}
                id={`size ${size}`}
                className="flex-row justify-center"
                onChange={handleSize}
              />
              <label for={`size ${size}`}>
                {size}
              </label>
            </li>
          ))}
        </ul>
      </form>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SizeModal />
        </Modal>
      )}
    </>
  );
}

export default ProductSize;