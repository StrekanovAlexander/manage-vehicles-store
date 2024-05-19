import mongoose from 'mongoose';
const Brand = mongoose.model('brands');

const all = (req, res) => {
    Brand.find()
        .exec()
        .then(brands => res.json(brands))
        .catch(err => res.status(500).json(err))
};

const create = (req, res) => { 
    Brand.create(req.body)
        .then(brand => res.json(brand))
        .catch(err => res.status(500).json(err))
};

const update = (req, res) => { 
    Brand.findOneAndUpdate({ id: req.params.id }, req.body)
        .exec()
        .then(() => res.json({ result: 'success' }))
        .catch(err => res.status(500).json(err))
};

const remove = (req, res) => { 
    Brand.deleteOne({ id: req.params.id })
        .exec()
        .then(() => res.json({ result: 'success' }))
        .catch(err => res.status(500).json(err))
};

export default { all, create, update, remove };