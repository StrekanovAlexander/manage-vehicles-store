import mongoose from 'mongoose';
const Brand = mongoose.model('brands');

const all = (req, res) => {
    Brand.find()
        .exec()
        .then(brands => res.json(brands))
        .catch(err => res.status(500).json(err))
};

export { all };