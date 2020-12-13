import React, { useState, useEffect } from "react";
import { product } from "services";

function Product() {
  const [listProduct, setListProduct] = useState([]);
  const [seacrh, setSearch] = useState("");

  const getProduct = (productName) => {
    product
      .getProduct(productName)
      .then((res) => {
        console.log(listProduct);
        setListProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProduct("");
  }, []);

  return (
    <>
      <div className="container mt-4 ml-6">
        <h1 className="text-4xl text-gray-900 mb-4 font-semibold">
          Data Product
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getProduct(seacrh);
          }}
        >
          <label htmlFor="user" className="text-lg font-semibold text-teal-900">
            Seacrh :
          </label>
          <input
            className="bg-white focus:outline-none border mx-4 px-2 py-1 w-1/2 border-gray-600 focus:border-yellow-500"
            type="text"
            value={seacrh}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <input
            type="submit"
            value="Cari"
            className='className=" bg-yellow-500 hover:bg-yellow-400 transition-all duration-200 focus:outline-none shadow-inner text-white mb-4 px-4 py-1'
          />
        </form>
        <div className="flex flex-col">
          {listProduct.map((product) => {
            return (
              <div key={[product.id]}>
                <div className="container">
                  <h3 className="text-xl font-medium text-gray-900 pt-2">
                    {product.description}
                  </h3>
                  <div>
                    <h4>{product.display_normal_price}</h4>
                  </div>
                  <h5>{product.display_price}</h5>
                  <p>{product.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Product;
