import {Link} from 'react-router-dom';
import "./Splash.css"

const Category = () => {
  return (
    <section className="splash_category">
        <div className="text_content flex-row justify-between align-center">
          <p className="free">We are free</p>
          <p>For us, comfort isn&#39;t rocket science -<br />it&#39;s standard.</p>
        </div>
        <div className="category_images flex-row justify-around">
          <Link to="/collections/womens">
            <picture>
              <img
                src="https://cdn.shopify.com/s/files/1/0146/8461/8806/files/Womens_286c03b1-41b1-415c-8215-6d5e8834131f_845x.jpg?v=1657253925"
                alt="women_category_pic"
                />
              <button className="btn">Women</button>
            </picture>
          </Link>
          <Link to="/collections/mens">
            <picture className="flex-row justify-center">
              <img 
                src="https://cdn.shopify.com/s/files/1/0146/8461/8806/files/Men_78afae33-0da4-4908-910b-d6177235d722_425x.jpg?v=1655780752"
                alt="men_category_pic" />
              <button className="btn">Men</button>
            </picture>
          </Link>
        </div>
      </section>
  )
}

export default Category;