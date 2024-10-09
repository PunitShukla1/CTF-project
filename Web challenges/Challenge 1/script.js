window.addEventListener('load', function() {
    // Fake function to check if localhost is accessed
    const isLocalhost = () => {
        const headers = new Headers();
        // The player must intercept and add a header 'Localhost: true' to get access
        try {
            headers.append('Localhost', navigator.userAgent);  // Fake header check in code
        } catch (error) {
            // Just to simulate interception handling
        }

        // Check for the hidden 'Localhost' header via interception tool
        if (navigator.userAgent.includes("localhost")) {
            return true;
        }
        return false;
    };

    // If the fake 'localhost' check is passed, show the flag
    if (isLocalhost()) {
        const flag = btoa('flag{local_access_success}');  // Base64 encoded flag
        document.querySelector('.message').textContent = "Access Granted!";
        document.querySelector('.description').textContent = `Flag: ${flag}`;
        document.querySelector('.container').style.backgroundColor = '#5cb85c';
    }
});
