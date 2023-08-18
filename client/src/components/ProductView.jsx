import useProduct, { Product } from "../hooks/useProduct";
import { useParams } from "react-router-dom";
function ProductView() {
  const { id } = useParams();

  const product = useProduct(id);

  return (
    <div>
      <Product product={product}></Product>
    </div>
  );
}

export default ProductView;
