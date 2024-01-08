import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Facebook = () => {
  const navigate = useNavigate();
  const storedProfile = sessionStorage.getItem('profile');
  const [profile, setProfile] = useState(storedProfile ? JSON.parse(storedProfile) : null);

  const handleLogin = async (response) => {
    try {
      const userData = {
        username: response.name,
        email: response.email,
        password: response.first_name,
        title: response.last_name,
        fullname: response.graphDomain,
        profileImage: response.short_name,
      };

      const apiResponse = await axios.post('https://raddaf-be.onrender.com/auth/signup', userData);
      console.log('API response:', apiResponse);

      navigate('/');
      setProfile(response.data);
      sessionStorage.setItem('profile', JSON.stringify(response.data));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleLogout = () => {
    setProfile(null);
    sessionStorage.removeItem('profile');
  };

  return (
    <div className="app-container">
      {!profile ? (
        <LoginSocialFacebook
          appId='926986624936966'
          onResolve={handleLogin}
          onReject={(error) => {
            console.log({ error });
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      ) : (
        <div className="user-info">
          <h1>{profile.name}</h1>
          <h1>{profile.email}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Facebook;
