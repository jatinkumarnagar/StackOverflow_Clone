import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]; // Add optional chaining for safety

        if (!token) {
            return res.status(401).json({ message: "Authorization token missing" }); // Return a meaningful error if token is missing
        }

        const decodeData = jwt.verify(token, 'test');
        req.userId = decodeData.id;

        next();
    } catch (error) {
        console.error('Authentication error:', error); // Log the error for debugging
        return res.status(403).json({ message: "Authentication failed" }); // Return a generic authentication failed message
    }
}

export default auth;
