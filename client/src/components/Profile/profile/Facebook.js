import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const Facebook = () => {
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
//   //     console.log(${key}: ${response.data[key]});
//   //     setName(${response.data[key]})
//   //   }
//   // }
//   // console.log(name)
//   // if (response.data.hasOwnProperty('firstname')) {
//   //   const firstnameValue = response.data.firstname;
//   //   setName(firstnameValue);
//   //   console.log(name: ${firstnameValue});

//   // }
// };
// const handleLogin = async (response) => {
//   try {
//     const userData = {
//       // avatar: "response.short_name",
//       username: response.data.name,
//       email: response.data.email,
//       password: response.data.first_name,
//       title:response.data.last_name,
//       fullname:response.data.last_name,
//       profileImage:null

//       // title: response.last_name,
//       // fullname: response.graphDomain,
//       // avatar: "response.short_name",
//     };
//     console.log("userdata",userData)
//     console.log(response)
//     // console.log(username)
//     console.log(response.data.email,"use",userData.username)
//     console.log(response.data.name,"JNF",userData.email)
//     console.log(response.data.first_name,"Jnf",userData.password)
//     console.log(response.data.last_name,"klmaflck,",userData.title,userData.fullname,userData.profileImage)

//     // Send user data to the API
//     const apiResponse = await axios.post('https://raddaf-be.onrender.com/auth/signup', userData);
//     console.log('API response:', apiResponse);

//     // Update state and sessionStorage
//     // if (response.status==="connected"){
//     //   navigate('/');
//     // }
//     navigate('/');
//     setProfile(response.data);
//     console.log(response)
//     sessionStorage.setItem('profile', JSON.stringify(response.data));
//   } catch (error) {
//     console.log("Error:", error);
//   }
// };
// const handleLogin = async (response) => {
//   try {
//     const userData = {
//       username: response.data.name,
//       email: response.data.email,
//       password: response.data.first_name,
//       title: response.data.last_name,
//       fullname: response.data.last_name,
//       profileImage: null,
//     };

//     console.log("userdata", userData);
//     console.log("KJNLFKNL",response.authResponse.graphDomain)
//     console.log("KJNLFKNL",response.authResponse.expiresIn)
//     console.log("KJNLFKNL",response.authResponse.accessToken)

//     const apiResponse = await axios.post('https://raddaf-be.onrender.com/auth/signup', userData);
//     console.log('API response:', apiResponse);

//     // Assuming setProfile is a state-setting function, make sure it's defined and works as expected
//     // setProfile(response.data);

//     // If setProfile is a function, ensure it's defined and does what you expect
//     // setProfile(response.data);

//     // Update state and sessionStorage
//     navigate('/');
//     sessionStorage.setItem('profile', JSON.stringify(response.data));
//   } catch (error) {
//     console.log("Error:", error);
//   }
// };

const handleLogin = async (response) => {
  try {
    const userData = {
      username: response.data.name,
      email: response.data.email,
      password: response.data.first_name,
      title: response.data.last_name,
      fullname: response.data.last_name,
      profileImage: response.data.picture.data.url
    };

    console.log("userdata", userData);
    // console.log("KJNLFKNL", response.authResponse.graphDomain);
    // console.log("KJNLFKNL", response.authResponse.expiresIn);
    // console.log("KJNLFKNL", response.authResponse.accessToken);

    const apiResponse = await fetch('https://raddaf-be.onrender.com/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    console.log(response)

    const responseData = await apiResponse.json();
    console.log('API response:', responseData);

    // Assuming setProfile is a state-setting function, make sure it's defined and works as expected
    // setProfile(response.data);

    // If setProfile is a function, ensure it's defined and does what you expect
    // setProfile(response.data);

    // Update state and sessionStorage
    navigate('/');
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

export default Facebook