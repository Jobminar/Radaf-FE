import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutus from './components/Aboutus/Aboutus';
import Support from './components/Support/Support';
import Valuemyhome from './components/Valuemyhome/Valuemyhome.js';
import Navbar from './components/Navbar-Footer/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Navbar-Footer/Footer';
import Signup from './components/Profile/signup/Signup.js';
import Error from './components/Home/Error.js';
import Viewpage from './components/Profile/MyViewing/Viewpage.js';
import Listing from './components/Profile/listing/Listing.js';
import Rentalpage from './components/Profile/Rental/Rentalpage.js';
import Myaccount from './components/Profile/Myaccount/Myaccount.js';
import Forsale from './components/Forsale/Forsale.jsx';
import Tolet from './components/To-let/Tolet.jsx';
import Myproperty from './components/Myproperty/Myproperty.js';
import Propertydetails from './components/Propertydetails/propertydetails.js';
import Logout from './components/Profile/profile/Logout.js';
import Listaproperty from './components/Lista-property/Lista-property.jsx';
import Login from './components/Profile/profile/Login.jsx';
import Nav from './components/Navbar-Footer/Nav.js';
import FloatingChatIcon from './components/Chat/FloatingChatIcon.jsx';
// import Login from './components/Profile/profile/Login.jsx';


function Routing() {
 

  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path='*' element={<Navbar><Error /></Navbar>} />
          <Route path='/home' element={<Navbar><Home /></Navbar>} />
          <Route path='/home1' element={<Nav><Home /></Nav>} />
          <Route path='/' element={<Nav><Login /></Nav>} />
          <Route path='/aboutus' element={<Navbar><Aboutus /></Navbar>} />
          <Route path='/support' element={<Navbar><Support /></Navbar>} />
          <Route path='/valuemyhome' element={<Navbar><Valuemyhome /></Navbar>} />
          <Route path='/signup' element={<Nav><Signup /></Nav>} />
          <Route path='/listing' element={<Navbar><Listing /></Navbar>} />
          <Route path='/viewpage' element={<Navbar><Viewpage /></Navbar>} />
          <Route path='/rentalpage' element={<Navbar><Rentalpage /></Navbar>} />
          <Route path='/myaccount' element={<Navbar><Myaccount /></Navbar>} />
          <Route path='/forsale' element={<Navbar><Forsale /></Navbar>} />
          <Route path='/tolet' element={<Navbar><Tolet /></Navbar>} />
          <Route path='/listaproperty' element={<Navbar><Listaproperty /></Navbar>} />
          <Route path='/myproperty' element={<Navbar><Myproperty /></Navbar>} />
          <Route path='propertydetails' element={<Navbar><Propertydetails /></Navbar>} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
        <FloatingChatIcon />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Routing;
