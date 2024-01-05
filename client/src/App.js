import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/profile/Profile.jsx";
import Aboutus from "./components/Aboutus/Aboutus";
import Support from "./components/Support/Support";
import Listmyproperty from "./components/Listmyproperty/Listmyproperty";
import Valuemyhome from "./components/Valuemyhome/Valuemyhome.js"
import Navbar from "./components/Navbar-Footer/Navbar";
import Home from "./components/Home/Home";

import Footer from "./components/Navbar-Footer/Footer";

import Signup from "./components/Profile/signup/Signup.js";

import Error from "./components/Home/Error.js";

import Viewpage from "./components/Profile/MyViewing/Viewpage.js";
import Listing from "./components/Profile/listing/Listing.js";
import Rentalpage from "./components/Profile/Rental/Rentalpage.js";
import Myaccount from "./components/Profile/Myaccount/Myaccount.js";


function App() {
  return (
    <div>
             <BrowserRouter>
             <Navbar/>
                <Routes>
                  <Route path="*" element={<Error />} />
                   <Route path="/" element={<Home/>}/>
                   <Route path="/profile" element={<Profile/>}/>
                   <Route path="/aboutus" element={<Aboutus/>}/>
                   <Route path="/support" element={<Support/>}/>
                   <Route path="/listmyproperty" element={<Listmyproperty/>}/>
                   <Route path="/valuemyhome" element={<Valuemyhome/>}/>
                   <Route path="/signup" element={<Signup />} />
                   <Route path="/listing" element={<Listing />} />
                   <Route path="/viewpage" element={<Viewpage />} />
                   <Route path="/rentalpage" element={<Rentalpage />} />
                   <Route path="/myaccount" element={<Myaccount />} />
                </Routes>
              <Footer/>
             </BrowserRouter> 
    </div>
  );
}

export default App;
