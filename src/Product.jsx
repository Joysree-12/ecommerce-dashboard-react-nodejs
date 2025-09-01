import React, { useState } from "react";

const Product = () => {
  const [products] = useState([
    { name: "Laptop", price: "50000", category: "Electronics", company: "Dell" },
    { name: "Mobile", price: "20000", category: "Electronics", company: "Samsung" },
    { name: "Shoes", price: "2500", category: "Fashion", company: "Nike" },
    { name: "Watch", price: "3000", category: "Accessories", company: "Fossil" },
    { name: "Headphones", price: "1500", category: "Electronics", company: "Sony" },

    
  ]);

  return (
    <div className="product-list" style={{ marginTop: "6%" }}>
      <h1>Product List</h1>

      <table border="1" cellPadding="10" style={{margin: "15px"}} >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
