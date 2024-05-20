import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const User = mongoose.model('users');

const all = (req, res) => {
    res.set('Content-Type', 'application/json');
    User.find()
        .exec()
        .then(el => res.json(el))
        .catch(err => res.status(500).json(err))
};

const create = (req, res) => { 
    res.set('Content-Type', 'application/json');
    User.create(req.body)
        .then(el => res.json(el))
        .catch(err => res.status(500).json(err))
};

const update = (req, res) => { 
    res.set('Content-Type', 'application/json');
    User.findOneAndUpdate({ id: req.params.id }, req.body)
        .exec()
        .then(() => res.json({ result: 'success' }))
        .catch(err => res.status(500).json(err))
};

const remove = (req, res) => { 
    res.set('Content-Type', 'application/json');
    User.deleteOne({ id: req.params.id })
        .exec()
        .then(() => res.json({ result: 'success' }))
        .catch(err => res.status(500).json(err))
};

const signin = (req, res) => {
    res.set('Content-Type', 'application/json');
    const { email, password } = req.body;
    User.findOne({ email })
        .exec()
        .then((user) => {
            if (user) {
                const match = bcrypt.compareSync(password, user.password); 
                if (match) {
                    const token = jwt.sign(user._id.toString(), process.env.JWT_STRING);
                    res.json(token);   
                } else {
                    res.status(401).json({ message: 'Wrong password' })
                }
            } else {
                res.status(401).json({ message: 'Not such user' })
            }
        })
        .catch(err => res.status(401).json({ message: err }));
};

export default { all, create, update, remove, signin };