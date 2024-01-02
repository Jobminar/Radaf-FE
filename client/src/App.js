import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Aboutus from "./components/Aboutus/Aboutus";
import Support from "./components/Support/Support";
import Listmyproperty from "./components/Listmyproperty/Listmyproperty";
import Valuemyhome from "./components/Valuemyhome/Valuemyhome.js"

import Navbar from "./components/Navbar-Footer/Navbar";
import Home from "./components/Home/Home";
import Signup from "./components/Profile/Signup";
function App() {
  return (
    <div>
             <BrowserRouter>
             <Navbar/>
                <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path="/profile" element={<Profile/>}/>
                   <Route path="/aboutus" element={<Aboutus/>}/>
                   <Route path="/support" element={<Support/>}/>
                   <Route path="/listmyproperty" element={<Listmyproperty/>}/>
                   <Route path="/valuemyhome" element={<Valuemyhome/>}/>
                   <Route path="/signup" element={<Signup />} />
                   
                </Routes>
             </BrowserRouter> 
    </div>
  );
}

export default App;
