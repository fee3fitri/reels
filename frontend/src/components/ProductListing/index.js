import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import './ProductListing.css';

const ProductListing = ({product}) => {
  const {id, name, price, imageUrl} = product
  // const images = imageUrl.split(' ');
  const images = product.imgUrls;
  const image = images[0];
  const rand = Math.floor(Math.random() * images.length);
  const randImg = images[1];

  return (
    <div className="product_listing_wrapper">
      <Link to={`/products/${id}`}>
        <Swiper 
          navigation={true} 
          modules={[Navigation]}
        >
          <SwiperSlide className="swiper_listing">
            <picture>
              <img src={image} alt={`${name}`} />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <img src={randImg} alt={`${name}`} />
            </picture>
          </SwiperSlide>
        </Swiper>
        <div className="product_listing_detail flex-row justify-between">
          <h2>{name}</h2>
          <p>{`$${price}`}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProductListing;