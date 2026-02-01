/**
 * Authentication Helper
 * Handles session checks and logout functionality
 */

// Check if user is logged in
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentPath = window.location.pathname;

    // If not logged in and not on login/index page, redirect
    if (!isLoggedIn && !currentPath.includes('login.html') && !currentPath.includes('index.html')) {
        window.location.href = 'login.html';
    }
}

// Handle Logout
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}

// Run check immediately
checkAuth();
