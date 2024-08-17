import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { UserContext } from "./UserContext";
import "./ProductList.css";

function ProductList() {
  const { userEmail } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoaUBiNjguZGV2IiwiZXhwIjoxNzIzODkzNTA2MzUzLCJpYXQiOjE3MjM4ODk5MDZ9.tdpL7l5amVPI0PgVsBfyXNs93kqT4lgPuFY0J51ppHg";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://intern-task-api.bravo68web.workers.dev/api/products",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProducts(response.data);
      } catch (error) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  if (loading) return <div className="loading-spinner"></div>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="product-list-container">
      <div className="user-email">Logged in as: {userEmail || "Guest"}</div>
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="product-list">
        {currentProducts.length === 0 ? (
          <p>No products available.</p>
        ) : (
          currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.title}
              price={product.price}
              thumbnail={product.thumbnail || "placeholder_image_url_here"}
            />
          ))
        )}
      </div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentProducts.length < productsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductList;
