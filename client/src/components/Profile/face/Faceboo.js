import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const App = () => {
    // const history = useHistory();
    const navigate = useNavigate();
    // const [name,setName]=useState("")
  const storedProfile = sessionStorage.getItem('profile');
  const [profile, setProfile] = useState(storedProfile ? JSON.parse(storedProfile) : null);

//   const handleLogin = (response) => {
//     try{
//         const userData = {
//             username: response.name,
//             email:response.email,
//             password:response.graphDomain,
//             title:response.grantedScopes,
//             fullname:response.name,
//             avatar:"response.picture.data.url"
//             // response.data.accessToken,
//             // email: response.data.email,
//             // Add other necessary fields based on your API requirements
//           }
//           const signupResponse = await axios.post('https://raddaf-be.onrender.com/auth/signup', userData);
//           console.log('Signup response:', signupResponse);
    
    
// //     // const navigate = useNavigate()
// //             console.log(profile.name);
// //             // console.log(userData)
// //     // const response = await axios.post('https://raddaf-be.onrender.com/auth/login', credentials);
// //             // setProfile(response.data);
// //     // navigate('/');
// //     // history.push('/');
// //             navigate('/');
// //             sessionStorage.setItem('profile', JSON.stringify(response.data));
//         }
//     catch(error){
//         console.log("error",error)
//     }
//   };


// const handleLogin =(response) => {
//   console.log("Data",response);
//   setProfile(response.data);
//   sessionStorage.setItem('profile', JSON.stringify(response.data));
//   console.log("profile",response.data)
//   // for (const key in response.data) {
//   //   if (response.data.hasOwnProperty(key)) { 
//   //     console.log(`${key}: ${response.data[key]}`);
//   //     setName(`${response.data[key]}`)
//   //   }
//   // }
//   // console.log(name)
//   // if (response.data.hasOwnProperty('firstname')) {
//   //   const firstnameValue = response.data.firstname;
//   //   setName(firstnameValue);
//   //   console.log(`name: ${firstnameValue}`);

//   // }
// };
const handleLogin = async (response) => {
  try {
    const userData = {
      // avatar: "response.short_name",
      username: response.name,
      email: response.email,
      password: response.first_name,
      // title: response.last_name,
      // fullname: response.graphDomain,
      // avatar: "response.short_name",
    };
    console.log(response)

    // Send user data to the API
    const apiResponse = await axios.post('https://raddaf-be.onrender.com/auth/signup', userData,);
    console.log('API response:', apiResponse);

    // Update state and sessionStorage
    navigate('/');
    setProfile(response.data);
    console.log(response)
    sessionStorage.setItem('profile', JSON.stringify(response.data));
  } catch (error) {
    console.log("Error:", error);
  }
};


  const handleLogout = () => {
    setProfile(null);
    sessionStorage.removeItem('profile');
  };
  // console.log("PPprofile",profile.name)

  // set

  return (
    <div className="app-container">
      {!profile ? (
        <LoginSocialFacebook
          appId='926986624936966'
          onResolve={handleLogin}
          onReject={(error) => {
            console.log({error});
          }}
        >
          <FacebookLoginButton  />
        </LoginSocialFacebook>
      ) : (
        <div className="user-">
          <h1>{profile.name}</h1>
          <h1>{profile.email}</h1>
          
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default App;