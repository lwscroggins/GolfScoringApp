//course-server.js

'use strict';

module.exports = function(app) {
    app.factory('CourseServer', function() {
        var _ = require('lodash');
        var index = {};
        var courseList =  
            [
                {
                  'id': 1,
                  'name': 'Pebble Beach Golf Club',
                  'city': 'Pebble Beach',
                  'state': 'CA',
                  'courseLength': 18,
                  'holes':
                    [
                        {
                            'name': 'Hole 1',
                            'par': 4,
                            'distance': '377'
                        },
                        {
                            'name': 'Hole 2',
                            'par': 5,
                            'distance': '511'
                        },
                        {
                            'name': 'Hole 3',
                            'par': 5,
                            'distance': '390'
                        },
                        // {
                        //     'name': 'Hole 4',
                        //     'par': 4,
                        //     'distance': '326'
                        // },
                        // {
                        //     'name': 'Hole 5',
                        //     'par': 3,
                        //     'distance': '192'
                        // },
                        // {
                        //     'name': 'Hole 6',
                        //     'par': 5,
                        //     'distance': '506'
                        // },
                        // {
                        //     'name': 'Hole 7',
                        //     'par': 3,
                        //     'distance': '106'
                        // },
                        // {
                        //     'name': 'Hole 8',
                        //     'par': 4,
                        //     'distance': '427'
                        // },
                        // {
                        //     'name': 'Hole 9',
                        //     'par': 4,
                        //     'distance':'481'
                        // },
                        // {
                        //     'name': 'Hole 10',
                        //     'par': 4,
                        //     'distance': '486'
                        // },
                        // {
                        //     'name': 'Hole 11',
                        //     'par': 4,
                        //     'distance': '373'
                        // },
                        // {
                        //     'name': 'Hole 12',
                        //     'par': 3,
                        //     'distance': '201'
                        // },
                        // {
                        //     'name': 'Hole 13',
                        //     'par': 4,
                        //     'distance': '403'
                        // },
                        // {
                        //     'name': 'Hole 14',
                        //     'par': 5,
                        //     'distance': '572'
                        // },
                        // {
                        //     'name': 'Hole 15',
                        //     'par': 4,
                        //     'distance': '396'
                        // },
                        // {
                        //     'name': 'Hole 16',
                        //     'par': 4,
                        //     'distance': '401'
                        // },
                        // {
                        //     'name': 'Hole 17',
                        //     'par': 3,
                        //     'distance': '177'
                        // },
                        // {
                        //     'name': 'Hole 18',
                        //     'par': 5,
                        //     'distance': '543'
                        // }
                    ]
                },
                {
                  'id': 2,
                  'name': 'Fake Course',
                  'city': 'Seattle',
                  'state': 'WA',
                  'courseLength': 18,
                  'holes':
                    [
                        {
                            'name': 'Hole 1',
                            'par': 4,
                            'distance': '371'
                        },
                        {
                            'name': 'Hole 2',
                            'par': 5,
                            'distance': '511'
                        },
                        {
                            'name': 'Hole 3',
                            'par': 5,
                            'distance': '390'
                        },
                        {
                            'name': 'Hole 4',
                            'par': 4,
                            'distance': '326'
                        },
                        {
                            'name': 'Hole 5',
                            'par': 3,
                            'distance': '192'
                        },
                        {
                            'name': 'Hole 6',
                            'par': 5,
                            'distance': '506'
                        },
                        {
                            'name': 'Hole 7',
                            'par': 3,
                            'distance': '106'
                        },
                        {
                            'name': 'Hole 8',
                            'par': 4,
                            'distance': '427'
                        },
                        {
                            'name': 'Hole 9',
                            'par': 4,
                            'distance':'481'
                        },
                        {
                            'name': 'Hole 10',
                            'par': 4,
                            'distance': '486'
                        },
                        {
                            'name': 'Hole 11',
                            'par': 4,
                            'distance': '373'
                        },
                        {
                            'name': 'Hole 12',
                            'par': 3,
                            'distance': '201'
                        },
                        {
                            'name': 'Hole 13',
                            'par': 4,
                            'distance': '403'
                        },
                        {
                            'name': 'Hole 14',
                            'par': 5,
                            'distance': '572'
                        },
                        {
                            'name': 'Hole 15',
                            'par': 4,
                            'distance': '396'
                        },
                        {
                            'name': 'Hole 16',
                            'par': 4,
                            'distance': '401'
                        },
                        {
                            'name': 'Hole 17',
                            'par': 3,
                            'distance': '177'
                        },
                        {
                            'name': 'Hole 18',
                            'par': 5,
                            'distance': '543'
                        }
                    ]
                },
                {
                  'id': 3,
                  'name': 'Another Fake',
                  'city': 'Dallas',
                  'state': 'TX',
                  'courseLength': 9,
                  'holes':
                    [
                        {
                            'name': 'Hole 1',
                            'par': 4,
                            'distance': '377'
                        },
                        {
                            'name': 'Hole 2',
                            'par': 5,
                            'distance': '511'
                        },
                        {
                            'name': 'Hole 3',
                            'par': 5,
                            'distance': '390'
                        },
                        {
                            'name': 'Hole 4',
                            'par': 4,
                            'distance': '326'
                        },
                        {
                            'name': 'Hole 5',
                            'par': 3,
                            'distance': '192'
                        },
                        {
                            'name': 'Hole 6',
                            'par': 5,
                            'distance': '506'
                        },
                        {
                            'name': 'Hole 7',
                            'par': 3,
                            'distance': '106'
                        },
                        {
                            'name': 'Hole 8',
                            'par': 4,
                            'distance': '427'
                        },
                        {
                            'name': 'Hole 9',
                            'par': 4,
                            'distance':'481'
                        }
                    ]
                }
            ]

        return {
            'getCourses': function() {
                return courseList;
            },
            'selectedCourse': function(val) {
                index = _.pick(courseList, function(chr) { return chr.name == val });
                return index;
            },
            'getCourse': function() {
                return index;
            }
        }
    });
}