import {Route, Routes } from "react-router-dom"
import Home from "./component/home/Home";
import Causes from "./component/causes/Causes";
import Aboutus from "./component/About/Aboutus";
import Navbar from "./component/Navbar/Navbar";
import Contact from "./component/contact/Contact";
function App() {
  return (
  <div>
     <Navbar />

        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Causes"} element={<Causes />} />
          <Route path={"/Aboutus"} element={<Aboutus />} />
          <Route path={"/Contact"} element={<Contact />} />
        </Routes>
      </div>
    
  );
}

export default App;
