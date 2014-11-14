'use strict'

module.exports = function(app) {
  app.factory('courseServer', function($http) {
    var parseCourse = function(course) {
      return {name: course.courseName, city: course.city, state: course.state, holes: course.numHols};
    };

    var course = {
      index: function() {
        var promise = $http({
          method: 'GET',
          url: '/api/v.0.0.1/courses'
        })
          .error(function(data, status) {
            console.log('error getting course - course-server.js');
            console.log(data);
            console.log(status);
          });
        return promise;
      },

      saveNewCourse: function(course) {
        var promise = $http.post('/api/v.0.0.1/courses/', parseCourse(course))
          .error(function(data, status) {
            console.log('error saving new course - course-server.js');
            console.log(data);
            console.log(status);
          });
        return promise;
      },

      saveOldCourse: function(course) {
        var promise = $http.put('/api/v.0.0.1/courses/' + course._id, parseCourse(course))
          .error(function(data, status) {
            console.log('error saving old course - course-server.js');
            console.log(data);
            console.log(status);
          });
        return promise;
      },

      deleteCourse: function(course) {
        var promise = $http.delete('/api/v.0.0.1/courses/' + course._id)
          .error(function(data, status) {
            console.log('error deleting course - course-server.js');
            console.log(data);
            console.log(status);
          });
        return promise;
      }
    };
    return course;
  });
};
