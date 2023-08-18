import useProducts, { Products } from "../hooks/useProducts";

function ProductsTable() {
  const products = useProducts();
  return (
    <div>
      <h1>Products List:</h1>
      <main className="flex justify-center ">
        <div className="w-3/4">
          {products && (
            <div className="flex flex-col w-full">
              <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead className="bg-white border-b">
                        <tr>
                          <th
                            scope="col"
                            className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Product
                          </th>
                          <th
                            scope="col"
                            className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Type
                          </th>
                          <th
                            scope="col"
                            className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Quantity
                          </th>
                          <th
                            scope="col"
                            className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Each
                          </th>
                        </tr>
                      </thead>
                      <Products products={products}></Products>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default ProductsTable;
