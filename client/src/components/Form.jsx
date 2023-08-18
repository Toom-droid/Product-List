import { useEffect, useState } from "react";
import axios from "axios";
import useProduct from "../hooks/useProduct";
function Form({ edit, add, id }) {
  const productGet = useProduct(id);

  const [product, setProduct] = useState({
    type: "" || productGet?.type,
    name: "" || productGet?.name,
    quantity: "" || productGet?.quantity,
    price: "" || productGet?.price,
  });

  useEffect(() => {
    if (productGet && edit) {
      setProduct({
        type: productGet.type,
        name: productGet.name,
        quantity: productGet.quantity,
        price: productGet.price,
      });
    }
  }, [productGet]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (add) {
      postProduct();
    }
    if (edit) {
      putProduct();
    }
  };

  async function putProduct() {
    try {
      await axios.put(`/api/products/edit/${id}`, product);
      window.location.href = "/";
    } catch (err) {
      console.error(err);
    }
  }

  async function postProduct() {
    try {
      await axios.post("/api/products/add", product);
      window.location.href = "/";
    } catch (err) {
      console.error(err);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setProduct({ ...product, name: value });
    } else if (name === "type") {
      setProduct({ ...product, type: value });
    } else if (name === "quantity") {
      setProduct({ ...product, quantity: value });
    } else if (name === "price") {
      setProduct({ ...product, price: value });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-2 justify-center"
    >
      <label htmlFor="name">Name: </label>
      <input
        onChange={handleChange}
        className="border rounded-md p-1 bg-neutral-200"
        type="text"
        id="name"
        name="name"
        placeholder="Coke,Pepsi..."
        defaultValue={productGet ? productGet.name : ""}
      />

      <label htmlFor="type">Type: </label>
      <select
        onChange={handleChange}
        className="border rounded-md p-1 bg-neutral-200"
        name="type"
        id="type"
        defaultValue={productGet ? productGet.type : ""}
      >
        <option defaultValue={productGet ? productGet.quantity : ""} disabled>
          buy/sell
        </option>
        <option value="buy">buy</option>
        <option value="sell">sell</option>
      </select>

      <label htmlFor="price">Price: </label>
      <input
        onChange={handleChange}
        className="border rounded-md p-1 bg-neutral-200"
        type="text"
        name="price"
        id="price"
        placeholder="$$$"
        defaultValue={productGet ? productGet.price : ""}
      />

      <label htmlFor="quantity">Quantity: </label>
      <select
        onChange={handleChange}
        className="border rounded-md p-1 bg-neutral-200"
        name="quantity"
        id="quantity"
        defaultValue={productGet ? productGet.quantity : ""}
      >
        <option defaultValue={productGet ? productGet.quantity : ""} disabled>
          -- Select Quantity --
        </option>
        {Array.from({ length: 16 }, (_, index) => (
          <option
            key={index}
            value={index}
            disabled={index === 0}
            defaultValue={index === 0 ? "selected" : ""}
          >
            {index}
          </option>
        ))}
      </select>

      <button
        className="p-1 bg-green-600 hover:bg-green-700 transition-colors w-3/6 mx-auto text-white rounded-md"
        type="submit"
      >
        Add Product
      </button>
    </form>
  );
}

export default Form;
