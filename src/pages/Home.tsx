import React, { useContext, useEffect, useState } from "react";
import background from "../assets/background3.jpg";
import { Link } from "react-router-dom";
import { Product } from "../types/products";
import { data } from "../data/data";
import { ApiContext } from "../context/ApiContext";

const Home = () => {
  const [showMore, setShowMore] = useState<number>(12);
  const { getAllProducts, product, categories, getCategories } =
    useContext(ApiContext);
  const categoryImg = data;

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="Home">
      <article
        className="promo"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="promo-content">
          <h2 className="promo-content-title">New Promo</h2>
          <p>
            Le black friday est de retour ! Profitez de -50% sur tout le site
            avec le code promo : BLACKFRIDAY N'hésitez pas à nous contacter pour
            plus d'informations.
          </p>
          <Link to="/shop" className="btn-promo">
            Buy Now
          </Link>
        </div>
      </article>
      <section className="categories">
        <h2 className="categories-title">Browse The Range</h2>
        <div className="categories-list">
          {categories.slice(0, 8).map((category: string) => (
            <Link
              to={`/shop/productsDetails/${category}`}
              className="categories-list-item"
            >
              {categoryImg.map((img) => {
                if (img.name === category) {
                  return (
                    <React.Fragment key={img.name}>
                      <img
                        src={img.img}
                        alt=""
                        className="categories-list-item-img"
                      />
                      <p className="category-name">
                        {category
                          ? category.charAt(0).toUpperCase() + category.slice(1)
                          : null}
                      </p>
                    </React.Fragment>
                  );
                }
                return null;
              })}
            </Link>
          ))}
        </div>
      </section>
      <section className="products">
        <h2 className="products-title">Our Products</h2>
        <div className="products-list">
          {product.slice(0, showMore).map((product: Product) => (
            <Link
              to={`/shop/productsDetails/${product.category}`}
              className="products-list-item"
              key={product.id}
            >
              <img
                src={product.images[0]}
                alt=""
                className="products-list-item-img"
              />
              <p className="products-list-item-title">
                {product.title.length > 15
                  ? product.title.substring(0, 15) + "..."
                  : product.title}
              </p>
              <p className="products-list-item-price">{product.price}€</p>
            </Link>
          ))}
          <button
            className="btn-products"
            onClick={() => setShowMore(showMore + 4)}
          >
            See More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
