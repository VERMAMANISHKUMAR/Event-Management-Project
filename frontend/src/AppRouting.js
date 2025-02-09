import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import EventDashboard from './components/EventDashboard';
import EventForm from './components/EventForm';
import SignupForm from './pages/SignupForm';
import NavigationBar from './components/Navbar';
import SignIn from './pages/SignIn';
import ProtectedRoute from './Auth/ProtectedRoute'; 
import Footer from './pages/Footer'
import UpcomingEvent from './pages/UpcomingEvents'
import AllEvents from './pages/AllEvents';
import AdminPage from "./pages/AdminMainPage";
import TotalEvent from './pages/TotalEvent'
import MainSlider from './pages/MainSlider'
import AllUsers from "./pages/AllUsers";
import ClosedEventPage from "./pages/ClosedEventPage";
function AppRouting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLog, setUserLog] = useState(false);
   // Check login status when component loads
   useEffect(() => {
     const token = localStorage.getItem("authToken");
    
     if (token) {
       setIsLoggedIn(true); // Set login state to true if token exists
       console.log("Token", token)
     }
   }, [userLog==true]);
   
  return (
    <Router>
      <NavigationBar isLoggedIn={isLoggedIn}  setIsLoggedIn={ setIsLoggedIn}  />
    
      <div>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage /> 
              </ProtectedRoute>
            }
           />
            <Route path="/" element={<MainSlider/>} />
            <Route path="/event-dashboard" element={<EventDashboard />} />
            <Route path="/event-form" element={<EventForm />} />
            <Route path="/upcoming-events" element={<UpcomingEvent />} />
            <Route path="/signupform" element={<SignupForm />} />
           <Route path="/signin" element={<SignIn userLog={userLog} setUserLog={setUserLog} />} />
           <Route path="/home" element={<HomePage />} />
           <Route path="/allevents" element={<AllEvents />} />
           <Route path="/admin" element={<AdminPage />} />
           <Route path="/total-event" element={<TotalEvent />} />
           <Route path="/all-user" element={<AllUsers />} />
           <Route path="/closed-event" element={<ClosedEventPage />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default AppRouting;
