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
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false}/>
      <Routes>
        <Route path="/" element={<>
          <Hero/>
          <SectionSecond />
          <Description />
          <SectionThree />
          <Team />
          <Blog />
          <About />
        </>} />
        <Route path="/BlogFilter" element={<BlogFilter />} />
      </Routes>
    </Router>
  );
}

export default App;
