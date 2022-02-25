import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Counter from "./features/counter";
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/header">Header</Link>
        <Link to="/counter">Counter</Link>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Counter />
              </>
            }
          />
          <Route path="/header" element={<Header />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
