import React from "react";
import { useDispatch } from "react-redux";
import { addFavorite, delFavorite } from "../redux/action";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addFavorite(product));
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const urlProduct = `https://upayments-studycase-api.herokuapp.com/api/products/${id}`;

      const res = await fetch(urlProduct, {
        method: "GET",
        mode: "cors",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndhZ2htYXJlbWFoZXNoMTIzQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9NYXgtUmVwb3MiLCJpYXQiOjE2NjMzMjc1MzIsImV4cCI6MTY2Mzc1OTUzMn0._swzVWnoJGN6j8bR5wL51_NUjllxVmPYGqIWuUIm9LQ",
          Host: "upayments-studycase-api.herokuapp.com",
        }),
      });
      const data = await res.json();
      setProduct(data.product);
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
      <div className="col-md-5">
        <Skeleton height={500}/>
      </div>
      <div className="col-md-5">
        <Skeleton height={50}/>
      </div>
      </>
    );
  };
  // console.log(product);
  const ShowProduct = () => {
    return (
      <>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4 h-100">
              <img
                src={product.avatar}
                class="img-fluid rounded-start"
                alt={product.name}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h2 class="card-title text-muted display-5">{product.name}</h2>
                <p class="card-text">
                  <h5>Product Details :</h5>
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>
                          <h4>Price:</h4>
                        </td>
                        <td>
                          <h4>Rs : {product.price}</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>Description:</td>
                        <td>{product.description}</td>
                      </tr>
                      <tr>
                        <td>Category:</td>
                        <td>{product.category}</td>
                      </tr>
                      <tr>
                        <td>Created:</td>
                        <td>{product.createdAt.substring(0, 10)}</td>
                      </tr>
                      <tr>
                        <td>Developer Email:</td>
                        <td>{product.developerEmail}</td>
                      </tr>
                    </tbody>
                  </table>
                  <NavLink  className="btn btn-outline-warning me-2" onClick={()=>addProduct(product)}>
                    <i class="fa fa-heart"></i> Add to Favorites
                  </NavLink>
                  <NavLink  className="btn btn-outline-danger me-2">
                  <i class="fa-solid fa-cart-shopping"></i>Buy Now
                  </NavLink>
                </p>
                <p class="card-text">
                  <small class="text-muted">
                    Last updated at {product.updatedAt.substring(0, 10)}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container py-5">
        <div className="row py-4">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </>
  );
};

export default Product;
