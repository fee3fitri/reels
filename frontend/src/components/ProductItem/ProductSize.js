import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, loadProduct } from "../../store/products";
import { Modal } from "../../context/Modal";
import SizeModal from "./SizeModal";
import './ProductItem.css'

const ProductSize = ({setSize, size}) => {
  const {productId} = useParams();
  const product = useSelector(loadProduct(productId));
  const sizes = product.size.split(' ');
  const [showModal, setShowModal] = useState(false);

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
          {sizes.map((size, idx) => (
            <li>
              <input type="radio"
                key={idx}
                name="size"
                value={size}
                id={`size ${size}`}
                className="flex-row justify-center"
                onClick={handleSize}
                defaultChecked={idx === 0}
              />
              <label htmlFor={`size ${size}`}>
                {size}
              </label>
            </li>
          ))}
        </ul>
      </form>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SizeModal setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default ProductSize;