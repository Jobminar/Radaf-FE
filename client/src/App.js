import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Aboutus from "./components/Aboutus/Aboutus";
import Support from "./components/Support/Support";
import Listmyproperty from "./components/Listmyproperty/Listmyproperty";
import Signup from "./components/Profile/Signup";
function App() {
  return (
    <div>
             <BrowserRouter>
                <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path="/profile" element={<Profile/>}/>
                   <Route path="/aboutus" element={<Aboutus/>}/>
                   <Route path="/support" element={<Support/>}/>
                   <Route path="/listmyproperty" element={<Listmyproperty/>}/>
                   <Route path="/signup" element={<Signup />} />
                   
                </Routes>
             </BrowserRouter> 
    </div>
  );
}

export default App;
