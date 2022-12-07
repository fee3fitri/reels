import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { loadProducts } from "../../store/products";
import SuggestionItem from "./SuggestionItem";
import './Suggestion.css';

const Suggestions = () => {
  const products = useSelector(loadProducts);

  if (!products) return null;

  return (
    <div className="product_suggestion_wrapper">
      <h1>You Might Also Like<i className="fa-regular fa-circle"></i></h1>
      <div className="suggestion_swiper">
        <Swiper 
          navigation={true} 
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Navigation]}>
          <div className="suggestion_item">
            {products.map(product=> (
              <SwiperSlide>
                <SuggestionItem 
                  key={product.id}
                  product={product} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default Suggestions;