import { useEffect, useState } from "react";
import axios from "axios";

function useProduct(id) {
  const [product, setProduct] = useState();

  useEffect(() => {
    getProduct(id);
  }, []);

  async function getProduct(id) {
    try {
      const response = await axios.get(`/api/products/${id}`);
      const data = response.data;
      setProduct({
        name: data.name,
        type: data.type,
        quantity: data.quantity,
        price: data.price,
        _id: data._id,
      });
    } catch (err) {
      console.error(err);
    }
  }

  return product;
}

export function Product({product}) {
  return (
    <div>
      {product && (
        <div className="bg-neutral-200 mx-auto w-1/2 mt-5 rounded-lg p-4 flex flex-col gap-3">
          <h1 className="text-xl">Product: {product.name}</h1>
          <p>Type: {product.type}</p>
          <p>Units: {product.quantity}</p>
          <p>Price: ${parseInt(product.quantity) * parseInt(product.price)} </p>
          <p>Each One: ${parseInt(product.price)}</p>
          <p>ID: ${product._id}</p>
        </div>
      )}
    </div>
  );
}

export default useProduct;
