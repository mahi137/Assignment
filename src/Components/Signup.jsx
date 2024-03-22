/* eslint-disable react/jsx-key */
import { NavLink } from "react-router-dom"
import bird from "../assets/twitter-logo-login.png"
import "../styles/signup.css"
const Signup = () => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const days = Array.from({ length: 30 }, (_, ind) => ind + 1);
    const startYear = 1990;
    const years = Array.from({ length: 25 }, (_, ind) => startYear + ind)
    return (
        <div className="signup-form-box">
            <div className="bird-img-box-signup">
                <img src={bird} alt="" />
            </div>
            <div className="">
                <div className="signup-to-twitter">Create an account</div>
            </div>
            <form action="" className="signup-form">
                <div className="">
                    <input type="text" className="inputs-all"
                        placeholder="Name" />
                </div>
                <div className="">
                    <input type="text" className="inputs-all" placeholder="Phone Number" />
                </div>

                <NavLink>Use email</NavLink>
                <div className="birth-box">
                    <strong>Date of birth</strong>
                    <p>Facilisi sem pulvinar velit nunc,
                        gravida scelerisque amet nibh sit.
                        Quis bibendum ante phasellus metus,
                        magna lacinia sed augue. Odio enim nascetur
                        leo mauris vel eget. Pretium id ullamcorper
                        blandit viverra dignissim eget tellus.
                        Nibh mi massa in molestie a sit. Elit congue.</p>
                </div>
                <div className="month-day-year">
                    <select name="month" id="" >
                        <option value="month">Months</option>
                        {
                            months.map((month) =>
                                <option key={month} value={month}>{month}</option>
                            )
                        }
                    </select>
                    <select name="day" id="">
                        <option value="day">Day</option>
                        {
                            days.map((day) =>
                                <option value={day}>{day}</option>
                            )
                        }
                    </select>
                    <select name="year" id="">
                        <option value="year">Year</option>
                        {
                            years.map((year) =>
                                <option value={year}>{year}</option>
                            )
                        }

                    </select>

                </div>

                <button className="all-btn">
                    Next</button>
            </form>


        </div>
    )
}

export default Signup