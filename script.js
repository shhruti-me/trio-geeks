document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.querySelector('input[name="password"]');

    togglePassword.addEventListener('click', () => {
        // Toggle password visibility
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Change the icon based on visibility
        togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
    });

    // Form submission event listener
    const form = document.querySelector('.login-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        const username = form.username.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        if (!username || !email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate form submission or validation
        alert(`Welcome, ${username}!`);
    });
});
