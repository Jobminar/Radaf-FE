import './Footer.css'
import logo from '../Home/Images/logo.png'
import insta from './Images/instagram.png'
import linkedin from './Images/linkedin.png'
import facebook from './Images/facebook.png'

const Footer =(()=>{
    return(
        <>
           <div className='footer-con'>
                <div className='logo-footer'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='joinus'>
                    <h1>Join us</h1>
                    <p>Become an Agent</p>
                    <p>Get referrals</p>
                    <p>Careers</p>
                </div>
                <div className='useful-links'>
                    <h1>Useful Links</h1>
                    <p>About Us</p>
                    <p>Property for Sale</p>
                    <p>Property to Rent</p>
                    <p>Register</p>
                    <p>Property Valuation</p>
                </div>
                <div className='finduson'>
                    <h1>Find Us On</h1>
                    <div className='socialmedia'>
                        <img src={linkedin} alt='socialmedia'/>
                        <p>Linkedin</p>
                    </div>
                    <div className='socialmedia'>
                        <img src={facebook} alt='socialmedia'/>
                        <p>Facebook</p>
                    </div>
                    <div className='socialmedia'>
                        <img src={insta} alt='socialmedia'/>
                        <p>Instagram</p>
                    </div>
                </div>
                <div className='countries'>
                        <h1>Countries</h1>
                        <p>United States</p>
                        <p>Canada</p>
                </div>
           </div>
        </>
    )
})
export default Footer