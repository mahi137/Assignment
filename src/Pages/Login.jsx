/* eslint-disable react/no-unknown-property */
import "../styles/login.css"
import bird from "../assets/twitter-logo-login.png"
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className="login-form-box">
            <div className="bird-img-box">
                <img src={bird} alt="" />
            </div>
            <div className="">
                <div className="login-to-twitter">Log in to Twitter</div>
            </div>
            <form action="" className="login-form">
                <div className="">
                    <input type="text" className="inputs-all"
                        placeholder="Phone number, email address" />
                </div>
                <div className="">
                    <input type="password" className="inputs-all" placeholder="Password" />
                </div>
                <button className="all-btn">
                    Log in</button>
            </form>
            <div className="links-">
                <NavLink >
                    Forgot password?
                </NavLink>
                <NavLink to={"/"}>
                    Sign up to Twitter
                </NavLink>
            </div>

        </div>
    )
}

export default Login;