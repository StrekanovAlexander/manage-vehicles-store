import jwt from 'jsonwebtoken';

export default  (req, res, next) => {
    const auth = req.get('Authorization');
    if (!auth) {
        res.status(401).json({ message: 'Wrong authorization header' });
    } else {
        const token = auth.replace('Bearer ', '');
        try {
            jwt.verify(token, process.env.JWT_STRING);
        } catch {
            res.status(401).json({ message: 'Wrong auth token' });    
        }
    }
    next();
}