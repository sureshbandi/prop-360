import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
