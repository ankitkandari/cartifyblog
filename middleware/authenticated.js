const protectedRoute = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    console.log('Please login');
    res.redirect('/auth/login');
}

const isAuthorized = (req, res, next) => {
    if (!req.isAuthenticated()) return next();
    res.redirect('/u/ads-dashboard');
}

module.exports = { protectedRoute, isAuthorized }