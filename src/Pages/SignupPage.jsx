import bird from "../assets/twitter-logo-login.png"
import google from "../assets/google-icon.png";
import apple from "../assets/logo-apple.png"
import bigBird from "../assets/back-twitter.png";
import "../styles/signup-page.css";
import { NavLink } from "react-router-dom";
const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="middle-portion">
        <div className="left-portion">
          <img src={bigBird} alt="" />
        </div>
        <div className="right-portion">
          <div className="right-portion-bird">
            <img src={bird} alt="" />
          </div>
          <div className="happening">
            Happening now
          </div>
          <div className="join-twitter">
            Join Twitter today
          </div>
          <div className="google-apple-box">
            <img src={google} alt="" />
            <div>
              Sign up with Google
            </div>
          </div>
          <div className="google-apple-box">
            <img src={apple} alt="" />
            <div>
              Sign up with Apple
            </div>
          </div>
          <div className="google-apple-box">
            <NavLink to={"/signup"}>
              Sign up with phone or email
            </NavLink>
          </div>
          <div className="privacy-cookies">
            By singing up
            you agree to the <NavLink to="#">
              Terms of Service
            </NavLink>{" "}
            and
            <NavLink to="#">{" "}
              Privacy Policy
            </NavLink>
            , including
            <NavLink to="#">{" "}
              cookies
              Use.
            </NavLink>
          </div>

          <div className="login-link">
            Already have an account ? <NavLink to={"/login"}>Login</NavLink>
          </div>
        </div>


      </div>
      <hr />
      <div className="footer-container">
        <div className="footer-item">
          Help Center
        </div>
        <div className="footer-item">
          Terms of Service
        </div>
        <div className="footer-item">
          Privacy Policy
        </div>
        <div className="footer-item">
          Cookie Policy
        </div>
        <div className="footer-item">
          Ads info
        </div>
        <div className="footer-item">
          Blog
        </div>
        <div className="footer-item">
          Status
        </div>
        <div className="footer-item">
          Careers
        </div>
        <div className="footer-item">
          Brand Resources
        </div>
        <div className="footer-item">
          Advertising
        </div>
        <div className="footer-item">
          Marketing
        </div>
        <div className="footer-item">
          Twitter for Business
        </div>
        <div className="footer-item">
          Developers
        </div>
        <div className="footer-item">
          Directory
        </div>
        <div className="footer-item">
          Settings
        </div>
        <div className="footer-item">
          <p>© 2021 Twitter, Inc.</p>
        </div>
      </div>


    </div>
  )
}

export default SignupPage