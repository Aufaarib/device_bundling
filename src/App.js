import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./components/Home/Home";
import ProductsLayout from "./components/layouts/ProductsLayout";
import Products from "./components/Products/Products";
import ProductDetail from "./components/Products/ProductDetail";
import PaymentMethod from "./components/Payments/PaymentMethod";
import PaymentsLayout from "./components/layouts/PaymentsLayout";
import OrderDetail from "./components/Payments/OrderDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/" element={<ProductsLayout />}>
        <Route path="/products" element={<Products />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Route>
      <Route path="/" element={<PaymentsLayout />}>
        <Route path="/payments/payment-method" element={<PaymentMethod />} />
        <Route path="/payments/order-detail" element={<OrderDetail />} />
        {/* <Route path="/product-detail" element={<ProductDetail />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
