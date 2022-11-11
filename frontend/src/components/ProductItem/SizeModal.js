import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadProduct } from '../../store/products';
import './ProductItem.css';

const SizeModal = () => {
  const {productId} = useParams();
  const product = useSelector(loadProduct(productId));
  const [hideSize] = useState(false);

  return (
    <div className={`size_modal ${hideSize ? 'hide-modal' : ''}`}>
      <h1>{product.name} Sizing</h1>
      <table>
        <tr>
          <th>US Size</th>
          <th>Outside Length</th>
          <th>Outsole Width</th>
        </tr>
        <tr>
          <td>5</td>
          <td>250mm</td>
          <td>88.5mm</td>
        </tr>
        <tr>
          <td>6</td>
          <td>257mm</td>
          <td>90mm</td>
        </tr>
        <tr>
          <td>7</td>
          <td>264mm</td>
          <td>91.5mm</td>
        </tr>
        <tr>
          <td>8</td>
          <td>270mm</td>
          <td>93mm</td>
        </tr>
        <tr>
          <td>9</td>
          <td>277mm</td>
          <td>94.5mm</td>
        </tr>
        <tr>
          <td>10</td>
          <td>284mm</td>
          <td>96mm</td>
        </tr>
      </table>
    </div>
  )
}

export default SizeModal;