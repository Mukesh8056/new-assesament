const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  { usernameField: 'email' },
  (email, password, done) => {
  
    if (email === 'newGmail@gmail.com' && password === 'password012') {
      const user = { id: 1, email: email };
      return done(null, user);
    } else {
      return done(null, false);
    }
  }
));

module.exports = passport;
