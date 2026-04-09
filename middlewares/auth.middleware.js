

const userModel = require('../models/user.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const captainModel = require('../models/captain.model');
const blackListTokenModel = require('../models/blacklistToken.model');


module.exports.authUser = async (req, res, next) => {
    const token =
        req.cookies?.token ||
        (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')
            ? req.headers.authorization.split(' ')[1]
            : null);

    if (!token) {
        return res.status(401).json({ message: 'unauthorized' });
    }

    const isblacklisted = await userModel.findOne({ token: token });

    if (isblacklisted) {
        return res.status(401).json({ message: 'unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;
        next();

    } catch (err) {
        return res.status(401).json({ message: 'unauthorized' });
    }
};




module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'unauthorized' });
    }

    const isblacklisted = await blackListTokenModel.findOne({ token: token });

    if (isblacklisted) {
        return res.status(401).json({ message: 'unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captian = await captainModel.findById(decoded._id);
        req.captain = captian;
        return next();
    }
    catch (err) {
        return res.status(401).json({ message: 'unauthorized' });
      }
};
