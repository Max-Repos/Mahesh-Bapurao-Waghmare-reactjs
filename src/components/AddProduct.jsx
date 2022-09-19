import React from "react";
import bg from "../assests/bg.jpg";

// Name (string)
// ii. Price (number)
// iii. Category (string)
// iv. Description (string)
// v. Avatar (string)
// vi. DeveloperEmail
const AddProduct = () => {
  return (
    <>
      <div className="container my-5 px-5">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={bg}
                className="img-thumbnail mx-auto rounded-start d-block h-100"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <form className="row g-3 ">
                  <div className="row px-5">
                    <div className="col-sm-5">
                      <label for="formGroupExampleInput" className="form-label">
                        Name :
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Enter the name"
                      />
                    </div>
                    <div className="col-sm-5">
                      <label for="formGroupExampleInput" className="form-label">
                        Price :
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Enter the price"
                      />
                    </div>
                    <div className="col-sm-5">
                      <label for="formGroupExampleInput" className="form-label">
                        Category :
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Enter the category"
                      />
                    </div>
                    <div className="col-col-sm-5">
                      <label
                        for="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Description :
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <div class="col-sm-5">
                      <label for="formGroupExampleInput" class="form-label">
                        Avatar :
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder="Enter the image source"
                      />
                    </div>
                    <div className="col-sm-5">
                      <label for="formGroupExampleInput" className="form-label">
                        Email :
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Enter the email"
                      />
                    </div>
                    <div className="col-12 py-2">
                      <button type="submit" className="btn btn-outline-primary">
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
