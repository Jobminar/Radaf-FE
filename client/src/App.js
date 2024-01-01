import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Aboutus from "./components/Aboutus/Aboutus";
import Support from "./components/Support/Support";
import Listmyproperty from "./components/Listmyproperty/Listmyproperty";
function App() {
  return (
    <>
             <BrowserRouter>
                <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path="/profile" element={<Profile/>}/>
                   <Route path="/aboutus" element={<Aboutus/>}/>
                   <Route path="/support" element={<Support/>}/>
                   <Route path="/listmyproperty" element={<Listmyproperty/>}/>
                </Routes>
             </BrowserRouter> 
    </>
  );
}

export default App;
