import { useState } from 'react';
import { FaUser, FaBars, FaTimes, FaInfo, FaUsers, FaCalendarAlt, FaUserShield, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/AdminMainPage.css'; // Assuming this CSS file exists
import MainSlider from './MainSlider'; // Assuming this component exists


const AdminPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const toggleSidebar = () => {
        if (isLoggedIn) {
            setIsSidebarOpen(!isSidebarOpen);
        }
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (formData.username === 'Admin@gmail.com' && formData.password === 'admin123') {
                setUser({ name: 'Admin' });
                setIsLoggedIn(true);
                setShowLoginForm(false);
                setIsSidebarOpen(true);
                navigate('/admin');
            } else {
                alert('Invalid credentials! Please try again.');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please check your credentials.');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUser(null);
        setIsSidebarOpen(false);
        navigate('/');
    };

    const handleCloseForm = () => {
        setShowLoginForm(false);
    };

    return (
        <div className="admin-container">
            <nav className="navbar">
                <button className="menu-btn" onClick={toggleSidebar} disabled={!isLoggedIn}>
                    <FaBars size={24} />
                </button>

                {!isLoggedIn ? (
                    <button className="login-btn" onClick={toggleLoginForm}>
                        Login
                    </button>
                ) : (
                    <div className="user-info">
                        <FaUser size={24} />
                        <span>{user?.name}</span>
                        <button className='Logout-button' onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </nav>

            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <button className="close-button" onClick={closeSidebar}>
                    <FaTimes size={24} />
                </button>
                <ul>
                    <li>
                        <Link to="/admin" className="sidebar-link">
                            <FaUserShield /> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/event-form" className="sidebar-link">
                            <FaCalendarAlt /> Create Event
                        </Link>
                    </li>
                    <li>
                        <Link to="/total-event" className="sidebar-link">
                            <FaUsers /> Total Event
                        </Link>
                    </li>
                    <li>
                        <Link to="/all-user" className="sidebar-link">
                            <FaUser /> All Users
                        </Link>
                    </li>
                    <li>
                        <Link to="/upcoming-event" className="sidebar-link">
                            <FaInfo /> Upcoming Event
                        </Link>
                    </li>
                    <li>
                        <Link to="/closed-event" className="sidebar-link">
                            <FaTimes /> Close Event
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout" className="sidebar-link" onClick={handleLogout}>
                            <FaSignOutAlt /> Logout
                        </Link>
                    </li>
                </ul>
            </div>

            {showLoginForm && (
                <div className="login-modal">
                    <div className="login-box">
                        <h3>Login</h3>
                        <form onSubmit={handleLogin}>
                            <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
                            <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
                            <button type="submit" className="btn btn-primary">Login</button>
                            <button type="button" className="btn btn-primary" onClick={handleCloseForm} style={{ marginLeft: '20px' }}>Close</button>
                        </form>
                    </div>
                </div>
            )}

            <div className="main-content">
                <h1 style={{ textAlign: 'center', color: '#498BEE' }}>Welcome to Admin Dashboard</h1>
                <MainSlider />
            </div>
        </div>
    );
};

export default AdminPage;
