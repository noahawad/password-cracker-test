// api/validatePassword.js
export default (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // Get the password from the request body
    const { password } = req.body;

    // Hardcoded correct password (for demonstration)
    const correctPassword = 'q2'; // Move the password to the backend for security

    // Check if the entered password is correct
    if (password === correctPassword) {
        return res.status(200).json({ message: 'Password is correct!' });
    } else {
        return res.status(403).json({ message: 'Password is incorrect!' });
    }
};
