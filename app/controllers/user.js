import mongoose from 'mongoose';
const User = mongoose.model('users');

const all = (req, res) => {
    User.find()
        .exec()
        .then(el => res.json(el))
        .catch(err => res.status(500).json(err))
};

const create = (req, res) => { 
    User.create(req.body)
        .then(el => res.json(el))
        .catch(err => res.status(500).json(err))
};

const update = (req, res) => { 
    User.findOneAndUpdate({ id: req.params.id }, req.body)
        .exec()
        .then(() => res.json({ result: 'success' }))
        .catch(err => res.status(500).json(err))
};

const remove = (req, res) => { 
    User.deleteOne({ id: req.params.id })
        .exec()
        .then(() => res.json({ result: 'success' }))
        .catch(err => res.status(500).json(err))
};

export default { all, create, update, remove };