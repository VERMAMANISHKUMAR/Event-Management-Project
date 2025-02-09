import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from 'react-icons/fa'; // Import user icon
import '../assets/styles/Navbar.css';

const Navbar = ({ setIsLoggedIn, isLoggedIn }) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState(null); //State to store username

    useEffect(() => {
        const handleStorageChange = () => {
            setIsLoggedIn(!!localStorage.getItem("authToken"));
            const user = localStorage.getItem('user'); // Fetch user data from local storage
            if(user) setUserName(JSON.parse(user).name); //Parse and update username
            else setUserName(null);
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);


    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem('user'); // Remove user data
        setIsLoggedIn(false);
        setUserName(null); //Clear username
        navigate("/signin");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/home" className="navbar-brand">
                    <h2 style={{ color: "#007BFF" }}>Event Management Platform</h2>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* Other menu items */}
                    </ul>

                    <div className="d-flex align-items-center">
                        {isLoggedIn ? (
                            <>
                                <div className="user-info">
                                     
                                    <FaUser className="user-icon"/> {/*User Icon */}
                                    <span className="username">{userName}</span> {/*Username*/}
                                </div>
                                <button className="btn btn-danger me-2" onClick={handleLogout}>
                                    Log Out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link className="btn btn-primary me-2" to="/signupform">
                                    Sign Up
                                </Link>
                                <Link className="btn btn-primary me-2" to="/signin">
                                    Log In
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
