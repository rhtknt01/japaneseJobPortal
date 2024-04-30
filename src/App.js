import "./App.css";
import AllJobs from "./pages/alljobs";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import JobDetails from "./components/jobs/jobdetails";
import Error from "./components/error/error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/contact" exact Component={Contact} />
        <Route path="/about" exact Component={About} />
        <Route
          path="/alljobs/:para_location/:para_pageid"
          exact
          Component={AllJobs}
        />
        <Route
          path="/alljobs/:para_location/:para_category/:para_pageid"
          exact
          Component={AllJobs}
        ></Route>

        <Route path="*" exact Component={Error}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
