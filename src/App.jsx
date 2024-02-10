import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import SectionSecond from "./components/SectionSecond/SectionSecond";
import Description from "./components/Descriptions/Description";
import SectionThree from "./components/SectionThird/SectionThree";
import Team from "./components/Team/Team";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import BlogFilter from "./components/Blogfilter/BlogFilter";

import "./index.css";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Recovery from "./components/Recovery/Recovery";

function App() {
  return (
    <div className="parent">
      <Router>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route
            path="/"
            element={
              <>
                <Hero />
                <SectionSecond />
                <Description />
                <SectionThree />
                <Team />
                <Blog />
                <About />
              </>
            }
          />
          <Route path="/BlogFilter" element={<BlogFilter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
