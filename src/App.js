import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Counter from "./features/counter";
import ProductFeature from "./features/Product";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
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
