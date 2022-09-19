import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addFavorite, delFavorite } from "../redux/action";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [category, setCategorie] = useState([]);
  const [prod, setProd] = useState([]);
  const [filter, setFilter] = useState(prod);
  const [loading, setLoading] = useState(false);
  let componentMount = true;

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addFavorite(product));
  }

  const funcProduct = async () => {
    setLoading(true);
    const urlProduct =
      "https://upayments-studycase-api.herokuapp.com/api/products";

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

    if (componentMount) {
      const data = await res.json();
      const product = data.products;
      // console.log(product[0].avatar);
      setProd(product);
      setFilter(product);
      setLoading(false);
    }
  };

  const funcCategories = async () => {
    const urlcategories =
      "https://upayments-studycase-api.herokuapp.com/api/categories/";
    const res = await fetch(urlcategories, {
      method: "GET",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndhZ2htYXJlbWFoZXNoMTIzQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9NYXgtUmVwb3MiLCJpYXQiOjE2NjMzMjc1MzIsImV4cCI6MTY2Mzc1OTUzMn0._swzVWnoJGN6j8bR5wL51_NUjllxVmPYGqIWuUIm9LQ",
        Host: "upayments-studycase-api.herokuapp.com",
      }),
    });
    if (componentMount) {
      const data = await res.json();
      const categories = data.categories;
      setCategorie(data.categories);
      // console.log(categories);
    }
  };

  useEffect(() => {
    funcProduct();
    funcCategories();
    return () => {
      componentMount = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updateProd = prod.filter((val) => {
      return val.category === cat;
    });
    setFilter(updateProd);
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="button d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(prod)}
          >
            All
          </button>
          {category.map((val) => {
            return (
              <button
                key={val._id}
                className="btn btn-outline-dark me-2"
                onClick={() => filterProduct(val.name)}
              >
                {val.name}
              </button>
            );
          })}
        </div>
        {filter.map((val) => {
          return (
            <>
              <div className="col-md-3 py-3">
                <div className="card h-100 text-center p-4" key={val._id}>
                  <img
                    src={val.avatar}
                    className="card-img-top"
                    alt={val.name}
                    height="250px"
                  />
                  <div className="card-body">
                    <NavLink to={`products/${val._id}`} className="btn btn-light pd-1 fs-05 ">
                      <h5 className="card-title mb-0">{val.name}</h5>
                      <p className="card-text lead fw-bold">Rs :{val.price}</p>
                    </NavLink>
                    <a href="#" className="btn btn-outline-dark" onClick={()=>addProduct(val)}>
                      Add to Favorites
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
//   console.log(category);
//   console.log(prod);
//   console.log(filter);

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Product</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  );
};

export default Products;
