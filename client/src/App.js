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
import Login from './components/Profile/profile/Profile.jsx';


function App() {
  const isLoggedIn = sessionStorage.getItem('token') !== null;

  return (
    <div>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path='*' element={<Error />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/support' element={<Support />} />
          <Route path='/valuemyhome' element={<Valuemyhome />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/listing' element={<Listing />} />
          <Route path='/viewpage' element={<Viewpage />} />
          <Route path='/rentalpage' element={<Rentalpage />} />
          <Route path='/myaccount' element={<Myaccount />} />
          <Route path='/forsale' element={<Forsale />} />
          <Route path='/tolet' element={<Tolet />} />
          <Route path='/listaproperty' element={<Listaproperty />} />
          <Route path='/myproperty' element={<Myproperty />} />
          <Route path='propertydetails' element={<Propertydetails />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/propertydetails' element={<Propertydetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
