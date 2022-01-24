const adsDashboard = (req, res) => {
    return res.render('user/dashboard', { layout: 'layout/userDashboard' });
}

module.exports = { adsDashboard }