
        document.addEventListener('DOMContentLoaded', function () {
            const loginButton = document.getElementById('loginButton');
            const profileDisplay = document.getElementById('profileDisplay');
            const profileName = document.getElementById('profileName');
            const logoutButton = document.getElementById('logoutButton');

            // Check if user data is stored in localStorage
            const userData = JSON.parse(localStorage.getItem('userData'));

            if (userData && userData.loggedIn) {
                // User is logged in, display profile info
                loginButton.style.display = 'none';
                profileName.textContent = userData.name;
                profileDisplay.style.display = 'block';
            } else {
                // User is not logged in, display login button
                loginButton.style.display = 'block';
                profileDisplay.style.display = 'none';
            }

            logoutButton.addEventListener('click', function () {
                // Clear user data from localStorage and update display
                localStorage.removeItem('userData');
                loginButton.style.display = 'block';
                profileDisplay.style.display = 'none';
            });
        });
  