import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import './styles/Home.css';
import Header from "./HomeComponents/Header";
import HomeContent from "./HomeComponents/HomeContent";

import SeatSelection from "./SeatSelection/SeatSelection";

const Home = (props) => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async() => {
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    };

    const userInfo = {
        phone: user.phoneNumber,
        email: user.email
    }

    const [isMovieSelected, setIsMovieSelected] = useState(false);
    const [movieName, setMovieName] = useState("");
    const [numberOfSeats, setNumberOfSeats] = useState(0);

    return ( <
        div className = "Home" > {!isMovieSelected &&
            <
            >
            <
            Header logoutFunc = { handleLogout }
            /> <
            HomeContent isMovieSelected = { setIsMovieSelected }
            selectMovie = { setMovieName }
            userInfo = { userInfo }
            /> <
            />
        } {
            isMovieSelected &&
                <
                >
                <
                SeatSelection movieTitle = { movieName }
            /> <
            />

        }


        <
        /div>


    );
};

export default Home;