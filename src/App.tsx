import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Header from "./components/Header/Header";
import Review from "./components/Review/Review";
import * as s from "./services";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/review/:id" element={<Review />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
