const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/User');

const loginHandler = passport => {
    passport.use(
        new LocalStrategy({ usernameField: "email" },
            (email, password, done) => {
                User.findOne({ email })
                    .then((user) => {
                        if (!user) {
                            console.log('Invalid email');
                            return done();
                        }

                        bcrypt.compare(password, user.password, (err, match) => {
                            if (err) throw err;
                            if (match) return done(null, user);
                            else {
                                console.log('Invalid password');
                                return done();
                            }
                        })
                    })
                    .catch((err) => console.log(err));
                passport.serializeUser((user, done) => {
                    done(null, user.id);
                });
                passport.deserializeUser((id, done) => {
                    User.findById(id, (err, user) => {
                        done(err, user);
                    })
                });
            }
        )
    )
}

module.exports = { loginHandler }