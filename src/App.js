import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import ProductFeature from "./features/Product";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="*" element={<ProductFeature />} />
          <Route path="products/*" element={<ProductFeature />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
