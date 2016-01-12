'use strict'

var Course = require('../models/course');

module.exports = function(app) {
  app.post('/api/v.0.0.1/courses', function(req, res) {
    Course.findOne({'course.courseName': req.body.courseName}, function(err, course) {
      if(err) return res.status(500).json(err);
      if(course) {
        console.log('course already exists');
        console.log(course);
        return res.status(401).json({'msg':'cannot create course'});
      } else {

        var newCourse = new Course();
        newCourse.courseName = req.body.courseName;
        newCourse.city = req.body.city;
        newCourse.state = req.body.state;
        newCourse.numHoles = req.body.numHoles;
        console.log(newCourse);

        newCourse.save(function(err, resCourse) {
          if(err) {
            console.log('error in course-routes: newCourse.save');
            console.log(err);
            return res.status(500).json(err);
          }
          return res.status(200).json({
            'name' : resCourse.courseName,
            'city' : resCourse.city,
            'state' : resCourse.state,
            'length' : resCourse.numHoles
          });
        });
      }
    });
  });

  app.get('/api/v.0.0.1/courses',
    function(req, res) {
      console.log('getting courses');
      return res.json({
        'name' : req.course.courseName,
        'city' : req.course.city,
        'state' : req.course.state,
        'length' : req.course.numHoles
      });
    });
};
