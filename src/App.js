import "./App.css";
import NavBar from "./components/NavBar.js";
import News from "./components/News.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News />} />
          <Route
            exact
            path="/business"
            element={<News key={"buisness"} category={"business"} />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News key={"entertainment"} category={"entertainment"} />}
          />
          <Route
            exact
            path="/general"
            element={<News key={"general"}category={"general"} />}
          />
          <Route exact path="/health" element={<News key={"health"} kecategory={"health"} />} />
          <Route
            exact
            path="/science"
            element={<News key={"science"}category={"science"} />}
          />
          <Route exact path="/sports" element={<News key={"sports"} category={"sports"} />} />
          <Route
            exact
            path="/technology"
            element={<News key={"technology"}category={"technology"} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
