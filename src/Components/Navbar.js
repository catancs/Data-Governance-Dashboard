import React from 'react';
import './Navbar.css'; 

function Navbar({ isAuthenticated, user, onLogout, onLogin }) {
    const handleLogin = () => onLogin && onLogin();
    const handleLogout = () => onLogout && onLogout();

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Data Governance</h1>
            </div>
            <div className="navbar-links">
                <a href="/dashboard">Home</a>
                <a href="/settings">Settings</a>
                <a href="/help">Help</a>
            </div>
            
            <div className="navbar-user">
                {isAuthenticated ? (
                    <div>
                        <span>{user}</span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <button onClick={handleLogin}>Login</button>
                )}
            </div>    
        
        </nav>
    );
}

export default Navbar;
