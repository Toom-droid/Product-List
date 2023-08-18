import { useEffect, useState } from "react";
import axios from "axios";

function useProducts() {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await axios.get("/api/products");
      const data = await response.data;
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  }

  return products;
}

export function Products({ products }) {
  const handleDelete = (_id) => {
    deleteProduct(_id);
  };

  async function deleteProduct(id) {
    try {
      await axios.delete(`/api/products/delete/${id}`);
      window.location.href = "/";
    } catch (err) {
      console.error(err);
    }
  }

  function handleView(id) {
    window.location.href = `/product/${id}`;
  }

  function handleEdit(id) {
    window.location.href = `/edit/${id}`;
  }

  return (
    <tbody>
      {products.map(({ name, type, quantity, price, _id }, index) => (
        <tr key={index}>
          <td className="text-md text-gray-900 font-light px-8 py-4 whitespace-nowrap">
            {name}
          </td>

          <td className="px-7 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {type}
          </td>

          <td className="text-sm text-gray-900 font-light px-12 py-4 whitespace-nowrap">
            {quantity}
          </td>

          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {`$${parseInt(price) * parseInt(quantity)}`}
          </td>

          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {`$${parseInt(price)}`}
          </td>

          <td className="text-sm flex gap-6 text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            <button
              className="bg-green-800 py-1  px-3 rounded-md text-white hover:bg-green-700 transition-colors"
              onClick={() => {
                handleView(_id);
              }}
            >
              View
            </button>
            <button
              className="bg-orange-500 py-1  px-4 rounded-md text-white hover:bg-orange-400 transition-colors"
              onClick={() => {
                handleEdit(_id);
              }}
            >
              Edit
            </button>
            <button
              className="bg-red-500 py-1  px-3 rounded-md text-white hover:bg-red-400 transition-colors"
              onClick={() => {
                handleDelete(_id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default useProducts;
