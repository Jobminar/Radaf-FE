import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./components/Aboutus/Aboutus";
import Support from "./components/Support/Support";
import Valuemyhome from "./components/Valuemyhome/Valuemyhome.js";
import Navbar from "./components/Navbar-Footer/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Navbar-Footer/Footer";
import Signup from "./components/Profile/signup/Signup.js";
import Error from "./components/Home/Error.js";
import Viewpage from "./components/Profile/MyViewing/Viewpage.js";
import Listing from "./components/Profile/listing/Listing.js";
import Rentalpage from "./components/Profile/Rental/Rentalpage.js";
import Myaccount from "./components/Profile/Myaccount/Myaccount.js";
import Forsale from "./components/Forsale/Forsale.jsx";
import Tolet from "./components/To-let/Tolet.jsx";
import Myproperty from "./components/Myproperty/Myproperty.js";
// import Propertydetails from './components/Propertydetails/propertydetails.js';
import Propertydetails from "./components/To-let/propertydetails.js";
import Logout from "./components/Profile/profile/Logout.js";
// import Listaproperty from './components/Lista-property/Lista-property.jsx';
import Login from "./components/Profile/profile/Profile.jsx";
import { AuthProvider } from "./components/auth.js";
import PrivateRoute from "./components/PrivateRoute.js";
import PropSubmit from "./components/PropList/PropSubmit.jsx";
import FloatingChatIcon from "./components/Chat/FloatingChatIcon.jsx";
import Listaproperty from "./components/Lista-property/Lista-property.jsx";

function App() {
  const isLoggedIn = sessionStorage.getItem("token") !== null;

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/aboutus"
            element={
              <PrivateRoute>
                <Aboutus />
              </PrivateRoute>
            }
          />
          <Route
            path="/support"
            element={
              <PrivateRoute>
                <Support />
              </PrivateRoute>
            }
          />
          <Route
            path="/valuemyhome"
            element={
              <PrivateRoute>
                <Valuemyhome />
              </PrivateRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/listing"
            element={
              <PrivateRoute>
                <Listing />
              </PrivateRoute>
            }
          />
          <Route
            path="/viewpage"
            element={
              <PrivateRoute>
                <Viewpage />
              </PrivateRoute>
            }
          />
          <Route
            path="/rentalpage"
            element={
              <PrivateRoute>
                <Rentalpage />
              </PrivateRoute>
            }
          />
          <Route
            path="/myaccount"
            element={
              <PrivateRoute>
                <Myaccount />
              </PrivateRoute>
            }
          />
          <Route
            path="/forsale"
            element={
              <PrivateRoute>
                <Forsale />
              </PrivateRoute>
            }
          />
          <Route
            path="/tolet"
            element={
              <PrivateRoute>
                <Tolet />
              </PrivateRoute>
            }
          />
          <Route
            path="/listaproperty"
            element={
              <PrivateRoute>
                <Listaproperty />
              </PrivateRoute>
            }
          />
          <Route
            path="/myproperty"
            element={
              <PrivateRoute>
                <Myproperty />
              </PrivateRoute>
            }
          />
          <Route
            path="propertydetails"
            element={
              <PrivateRoute>
                <Propertydetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/logout"
            element={
              <PrivateRoute>
                <Logout />
              </PrivateRoute>
            }
          />
          <Route
            path="/propertydetails"
            element={
              <PrivateRoute>
                <Propertydetails />
              </PrivateRoute>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
      <FloatingChatIcon/>
    </AuthProvider>
  );
}

export default App;
