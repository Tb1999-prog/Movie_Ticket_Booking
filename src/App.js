import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PhoneSignUp from "./components/PhoneSignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./components/LandingPage";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import SeatSelection from "./components/SeatSelection/SeatSelection";
import { useState } from "react";

function App() {

    return ( <
        div className = "app" >
        <
        UserAuthContextProvider >
        <
        Routes >
        <
        Route path = "/home"
        element = { <
            ProtectedRoute >
            <
            Home / >
            <
            /ProtectedRoute>
        }
        />

        <
        Route path = "/collegeProject"
        element = { < LandingPage / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/signup"
        element = { < Signup / > }
        /> <
        Route path = "/phonesignup"
        element = { < PhoneSignUp / > }
        /> { /* <Route path="/selectSeats" element={<SeatSelection  />} /> */ } <
        /Routes> <
        /UserAuthContextProvider> <
        /div>

    );
}

export default App;