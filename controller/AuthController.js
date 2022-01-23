const User = require('../model/User');
const bcrypt = require('bcryptjs');

const register = (req, res) => {
    res.render('auth/register', {});
}

const login = (req, res) => {
    res.render('auth/login', {});
}

const registerUser = (req, res) => {
    const { name, email, password, confirm } = req.body;
    if (!name || !email || !password || !confirm) console.log('All fields are required');
    if (password !== confirm) console.log('Unable to match password');
    else {
        User.findOne({ email })
            .then((user) => {
                if (user) res.render("register", { message: "Email already exists" });
                else {
                    const newUser = new User({ name, email, password });
                    bcrypt.genSalt(10, (err, salt) => {
                        if (err) throw err;
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser.save()
                                .then(res.redirect('/auth/login'))
                                .catch((err) => console.log('Registration error ', err))
                        })
                    });
                }
            })
    }

}

module.exports = {
    register,
    registerUser,
    login
}