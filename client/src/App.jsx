import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import ProductView from "./components/ProductView";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsList />} exact />
          <Route path="/add" element={<ProductAdd />} exact />
          <Route path="/edit/:id?" element={<ProductEdit />} exact />
          <Route path="/product/:id?" element={<ProductView />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
