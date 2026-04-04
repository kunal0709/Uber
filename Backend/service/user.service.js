







const userModel = require("../models/user.models");

module.exports.createUser = async ({
    firstname,
    lastname,
    email,
    password
}) => {

    if (!firstname || !lastname || !email || !password) {
        throw new Error('all fields are required');
    }

    const user = await userModel.create({
        fullname: {
            first: firstname,
            last: lastname
        },
        email,
        password
    });

    return user;
}