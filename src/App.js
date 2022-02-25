import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Counter from "./features/counter";
import ProductFeature from "./features/Product";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Link to="/">Home</Link>
        <Link to="counter">Counter</Link>
        <Link to="products">Products</Link>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <ProductFeature />
                {/* <Counter /> */}
              </>
            }
          />
          <Route path="counter" element={<Counter />} />
          <Route path="products/*" element={<ProductFeature />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
