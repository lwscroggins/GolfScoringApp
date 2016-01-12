'use strict'

var User = require('../models/user');

module.exports = function(app, passport) {
  app.post('/api/v.0.0.1/users', function(req, res) {
    User.findOne({'basic.email': req.body.email}, function(err, user) {
      if(err) return res.status(500).json(err);

      if(user) {
        console.log('user already exists');
        console.log(user);
        return res.status(401).json({'msg': 'cannot create user'});
      } else {


        var newUser = new User();
        newUser.basic.email = req.body.email;
        newUser.basic.password = newUser.generateHash(req.body.password);

        newUser.save(function(err, resUser) {
          if(err) {
            console.log('err in user-routes newUser.save');
            console.log(err);
            return res.status(500).json(err);
          }
          return res.status(200).json({'jwt': resUser.createToken(app)});
        });
      }
    });
  });

  app.get('/api/v.0.0.1/users',
    passport.authenticate('basic', {session: false}),
    function(req, res) {
      console.log('getting users');
      return res.json({'jwt': req.user.createToken(app)});
    });
};
