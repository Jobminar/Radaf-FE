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
import Propertydetails from './components/To-let/propertydetails.js';
import Logout from './components/Profile/profile/Logout.js';
import Listaproperty from './components/Lista-property/Lista-property.jsx';
import Login from './components/Profile/profile/Login.jsx';
import Nav from './components/Navbar-Footer/Nav.js';
import FloatingChatIcon from './components/Chat/FloatingChatIcon.jsx';
import Bookviewing from "./components/Bookviewing/Bookviewing.js"
import Bookafreevaluation from './components/Bookafreevaluation/Bookafreevaluation.js';
import Lettedpropertydetails from "./components/LettedProperties/Lettedpropertydetails.js"
import Lettedaggrements from "./components/LettedProperties/Lettedagreements.js"
import Lettedbills from "./components/LettedProperties/Lettedbill.js"
import Lettedinspection from "./components/LettedProperties/lettedpropertiesinspection.js"
import Lettedrepair from "./components/LettedProperties/Lettedrepair.js"
import Letting from './components/LettingProperties/Lettingpropertydetails.js';
// import Lettinginpectio from "./components/LettingProperties/lettingpropertiesinspection.js"
import Lettinginspection from './components/LettingProperties/lettingpropertiesinspection.js';
import Undersalepropertydetails from "./components/Undersale/Undersalepropertydetails.js"
import Undersaleinspection from "./components/Undersale/Undersalepropertiesinspection.js"
import Undersalebill from "./components/Undersale/Undersalebill.js"
import Undersaleagreements from "./components/Undersale/Undersaleagreements.js"
import Undersalerepair from "./components/Undersale/Undersalerepair.js"
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
          <Route path='/bookviewing' element={<Navbar><Bookviewing /></Navbar>} />
          <Route path='/bookafreevaluation' element={<Navbar><Bookafreevaluation /></Navbar>} />
          <Route path='/lettedpropertydetails' element={<Navbar><Lettedpropertydetails /></Navbar>} />
          <Route path='/lettedagreements' element={<Navbar><Lettedaggrements /></Navbar>} />
          <Route path='/lettedbill' element={<Navbar><Lettedbills /></Navbar>} />
          <Route path='/lettedinspection' element={<Navbar><Lettedinspection /></Navbar>} />
          <Route path='/lettedrepair' element={<Navbar><Lettedrepair /></Navbar>} />
          {/*  */}
          <Route path='/lettingpropertydetails' element={<Navbar><Letting /></Navbar>} />
          <Route path='/lettinginspection' element={<Navbar><Lettinginspection /></Navbar>} />

          <Route path='/undersalepropertydetails' element={<Navbar><Undersalepropertydetails /></Navbar>} />
          <Route path='/undersaleinspection' element={<Navbar><Undersaleinspection /></Navbar>} />
          <Route path='/undersalebill' element={<Navbar><Undersalebill /></Navbar>} />
          <Route path='/undersaleagreements' element={<Navbar><Undersaleagreements /></Navbar>} />
          <Route path='/undersalerepair' element={<Navbar><Undersalerepair /></Navbar>} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
        <FloatingChatIcon />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Routing;
