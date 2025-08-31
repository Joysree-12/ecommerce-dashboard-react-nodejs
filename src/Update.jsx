import React, { useState } from "react";

const Update = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  // function to handle button click
  const Data = () => {
    console.log(name, price, category, company);
  };

  return (
    <>
      <div className="product">
        <h1>Update Product</h1>
        <input
          className="inputbox"
          type="text"
          value={name}
          placeholder="Enter Product Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="inputbox"
          type="text"
          value={price}
          placeholder="Enter Product Price"
          onChange={(event) => setPrice(event.target.value)}
        />
        <input
          className="inputbox"
          type="text"
          value={category}
          placeholder="Enter Product Category"
          onChange={(event) => setCategory(event.target.value)}
        />
        <input
          className="inputbox"
          type="text"
          value={company}
          placeholder="Enter Product Company"
          onChange={(event) => setCompany(event.target.value)}
        />
        <button className="addbtn" onClick={Data}>
          Update Product
        </button>
      </div>
    </>
  );
};

export default Update;
