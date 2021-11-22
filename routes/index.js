var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/login', function (req, res) {
  const { email, password } = req.body
  if (email.length && password.length !== 0) {
    return res.redirect('/dashboard');
  }
})

router.get('/logout', function (req, res, next) {
  res.redirect('/')
});

router.get('/dashboard', function (req, res, next) {
  res.render('dashboard/dashboard')
});

module.exports = router;
