import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import './ProductListing.css';

const ProductListing = ({product}) => {
  const {id, name, price} = product
  const images = product.imgUrls;
  const image = images[0];
  const rand = Math.floor(Math.random() * images.length);
  const randImg = images[rand];

  return (
    <div className="product_listing_wrapper">
      <Swiper 
        navigation={true} 
        modules={[Navigation]}>
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
      <Link to={`/products/${id}`}>
        <div className="product_listing_detail flex-row justify-between">
          <p>{name}</p>
          <p>{`$${price}`}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProductListing;