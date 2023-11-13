import ProductList from "../features/product_list/ProductList";
import Navbar from "../features/navbar/Navbar";
function HomePage() {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  );
}

export default HomePage;
