import { useContext, useEffect, useState } from "react";
import "../styles/productsDetail.css";
import { ApiContext } from "../context/ApiContext";
import { Link, useParams } from "react-router-dom";
import { Product } from "../types/products";
import { CartContext } from "../context/Cart";

const ProductDetails = () => {
  const {
    getOneProduct,
    productDetails,
    relatedProducts,
    getProductsByCategory,
  } = useContext(ApiContext);

  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  // get the id from the url
  const id: string = useParams<{ id: string }>().id ?? "";

  // make a 1sec delay to show the loading

  useEffect(() => {
    getOneProduct(id);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [getOneProduct, id]);

  useEffect(() => {
    if (productDetails?.category) {
      getProductsByCategory(productDetails.category);
    }
  }, [getProductsByCategory, productDetails]);

  const handleAddCart = () => {
    addToCart(productDetails.id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="product-details">
      <div className="shop_accueil_div">
        <Link to="/">
          <p className="shop_accueil_text">Home &gt;</p>
        </Link>
        <Link to="/shop">
          <p className="shop_accueil_text">Shop</p>
        </Link>
        <p className="productTitle">| {productDetails.title}</p>
      </div>
      <section className="product-details-container">
        <div className="product-details-img">
          {productDetails.images && productDetails.images.length > 1 ? (
            <div className="product-details-img-small-div">
              {productDetails.images
                .slice(0, 4)
                .map((image: string, key: number) => {
                  return (
                    <img
                      key={key}
                      src={image}
                      className="image-small"
                      alt={productDetails.title}
                    />
                  );
                })}
            </div>
          ) : null}
          <img
            src={productDetails.images[0]}
            className="image-big"
            alt={productDetails.title}
          />
        </div>
        <div className="product-details-text">
          <p className="product-details-text-title">{productDetails.title}</p>
          <p className="product-details-text-price">{productDetails.price} €</p>
          <p className="product-details-text-description">
            {productDetails.description}
          </p>
          <p className="product-details-text-category">
            Category : {productDetails.category}
          </p>
          <button
            className="product-details-text-button"
            onClick={() => handleAddCart()}
          >
            Add to cart
          </button>
        </div>
      </section>
      <section className="related-products">
        <p className="related-products-title">Related products</p>
        <div className="related-products-container">
          {relatedProducts &&
            relatedProducts.map((product: Product, key: number) => {
              return (
                <div className="related-products-card" key={key}>
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="related-products-card-img"
                    />
                  </Link>
                  <div className="related-products-card-text">
                    <p className="related-products-card-text-title">
                      {product.title.length > 15
                        ? product.title.substring(0, 15) + "..."
                        : product.title}
                    </p>
                    <p className="related-products-card-text-price">
                      {product.price} €
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </section>
  );
};

export default ProductDetails;
