import React, { useContext, useEffect, useState } from "react";
import background from "../assets/shop_background.jpg";
import "../styles/shop.css";
import { Link } from "react-router-dom";
import { Product } from "../types/products";
import { ApiContext } from "../context/ApiContext";
import ReactPaginate from "react-paginate";

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const { getAllProducts, product } = useContext(ApiContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleChange = () => {
    const input = document.querySelector(".filter-search-bar-input-text");
    const inputValue = input?.nodeValue;
    const filteredProducts = product.filter((product) => {
      return product.title.toLowerCase().includes(inputValue);
    });
    setFilteredProducts(filteredProducts);
  };

  function Products({ currentProducts }: Product[]) {
    return (
      <div className="products-list">
        {currentProducts &&
          currentProducts.map((product: Product) => {
            return (
              <div className="shop-products-card" key={product.id}>
                <Link to={`/shop/${product.id}`}>
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
              </div>
            );
          })}
      </div>
    );
  }

  function PaginatedItems({ productsPerPage }: any) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + productsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = product.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(product.length / productsPerPage);

    const handlePageClick = (event) => {
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
        <div className="shop_accueil_div">
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
            onClick={() => handleChange()}
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
