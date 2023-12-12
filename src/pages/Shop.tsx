import { useContext, useEffect, useState } from "react";
import background from "../assets/shop_background.jpg";
import "../styles/shop.css";
import { Link } from "react-router-dom";
import { Product } from "../types/products";
import { ApiContext } from "../context/ApiContext";
import { CartContext } from "../context/Cart";
import ReactPaginate from "react-paginate";

const Shop = () => {
  const [page] = useState(1);
  const { getAllProducts, product } = useContext(ApiContext);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  const Products = ({ currentProducts } : any) => {
    return (
      <div className="products-list">
        {currentProducts &&
          currentProducts.map((product: Product) => {
            return (
              // add to cart
              <div className="shop-products-card" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="shop-products-card-img"
                  />
                </Link>
                <div className="shop-products-card-text">
                  <p className="shop-products-card-text-title">
                    {product.title.length > 15
                      ? product.title.substring(0, 15) + "..."
                      : product.title}
                  </p>
                  <p className="shop-products-card-text-price">
                    {product.price} €
                  </p>
                </div>
                <button
                  className="shop-products-card-btn"
                  onClick={() => addToCart(product.id)}
                >
                  Add to cart
                </button>
              </div>
            );
          })}
      </div>
    );
  }

  const PaginatedItems = ({ productsPerPage }: any) => {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + productsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = product.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(product.length / productsPerPage);

    const handlePageClick = (event : any) => {
      const newOffset = (event.selected * productsPerPage) % product.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
      <>
        <Products currentProducts={currentItems} />
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel="suivant >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< précédent"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }

  return (
    <div className="shop">
      <article
        className="shop_accueil"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <h2>Shop</h2>
        <div className="shop_accueil_2">
          <Link to="/">
            <p className="shop_accueil_text">Home &gt;</p>
          </Link>
          <Link to="/shop">
            <p className="shop_accueil_text">Shop</p>
          </Link>
        </div>
      </article>
      <article className="filter-search">
        {/* stat bar based on products and show the number of produts input*/}
        <p className="filter-search-bar-text">
          Showing {page == 0 ? 1 : page * 16}/{page == 0 ? 16 : page * 16 * 2}{" "}
          of {product.length} results
        </p>
        <div className="filter-search-bar-input">
          <input
            type="text"
            placeholder="Search..."
            className="filter-search-bar-input-text"
          />
          <button className="filter-search-bar-input-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </article>
      <article className="shop-products">
        <div>
          <PaginatedItems productsPerPage={16} />
        </div>
      </article>
    </div>
  );
};

export default Shop;
