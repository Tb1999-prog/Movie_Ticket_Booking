import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import './styles/LandingPage.css';
function LandingPage() {
    const navigate = useNavigate();
    const proceedToLogin=()=>{
        navigate("/login");
    }

  return (
        <div className="landingPage">
            <div className="landingContainer">
                <h1>Movie Ticket Booking</h1>
                <h3>Book or reserve Movie Tickets online without going to the theatres</h3>
                <div className="movieImg">
                <img src="https://iili.io/Q60NBp.png" alt="movieImg" border="0"/>
                </div>
            </div>
            <div className="proceedToLogin">
                    {/* <h3>Login to continue</h3> */}
                    {/* <Button variant="primary" onClick={proceedToLogin}> Login to continue</Button> */}
                    <button className="proceedToLogin" onClick={proceedToLogin}>Proceed to Log-in</button>
            </div>
        </div>
  )
}

export default LandingPage;