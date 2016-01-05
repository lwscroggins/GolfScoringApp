//course-server.js

'use strict';

module.exports = function(app) {
    app.factory('CourseServer', function() {
        return {
            'courseList': 
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
                            'hole1': {
                            'par': 4,
                            'distance': '377'
                            },
                        },
                        {
                            'hole2': {
                                'par': 5,
                                'distance': '511'
                            }
                        },
                        {
                            'hole3': {
                                'par': 5,
                                'distance': '390'
                            }
                        },
                        {
                            'hole4': {
                                'par': 4,
                                'distance': '326'
                            }
                        },
                        {
                            'hole5': {
                                'par': 3,
                                'distance': '192'
                            }
                        },
                        {
                            'hole6': {
                                'par': 5,
                                'distance': '506'
                            }
                        },
                        {
                            'hole7': {
                                'par': 3,
                                'distance': '106'
                            }
                        },
                        {
                            'hole8': {
                                'par': 4,
                                'distance': '427'
                            }
                        },
                        {
                            'hole9': {
                                'par': 4,
                                'distance':'481'
                            }
                        },
                        {
                            'hole10': {
                                'par': 4,
                                'distance': '486'
                            }
                        },
                        {
                            'hole11': {
                                'par': 4,
                                'distance': '373'
                            }
                        },
                        {
                            'hole12': {
                                'par': 3,
                                'distance': '201'
                            }
                        },
                        {
                            'hole13': {
                                'par': 4,
                                'distance': '403'
                            }
                        },
                        {
                            'hole14': {
                                'par': 5,
                                'distance': '572'
                            }
                        },
                        {
                            'hole15': {
                                'par': 4,
                                'distance': '396'
                            }
                        },
                        {
                            'hole16': {
                                'par': 4,
                                'distance': '401'
                            }
                        },
                        {
                            'hole17': {
                                'par': 3,
                                'distance': '177'
                            }
                        },
                        {
                            'hole18': {
                                'par': 5,
                                'distance': '543'
                            }
                        }
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
                            'hole1': {
                            'par': 4,
                            'distance': '377'
                            },
                        },
                        {
                            'hole2': {
                                'par': 5,
                                'distance': '511'
                            }
                        },
                        {
                            'hole3': {
                                'par': 5,
                                'distance': '390'
                            }
                        },
                        {
                            'hole4': {
                                'par': 4,
                                'distance': '326'
                            }
                        },
                        {
                            'hole5': {
                                'par': 3,
                                'distance': '192'
                            }
                        },
                        {
                            'hole6': {
                                'par': 5,
                                'distance': '506'
                            }
                        },
                        {
                            'hole7': {
                                'par': 3,
                                'distance': '106'
                            }
                        },
                        {
                            'hole8': {
                                'par': 4,
                                'distance': '427'
                            }
                        },
                        {
                            'hole9': {
                                'par': 4,
                                'distance':'481'
                            }
                        },
                        {
                            'hole10': {
                                'par': 4,
                                'distance': '486'
                            }
                        },
                        {
                            'hole11': {
                                'par': 4,
                                'distance': '373'
                            }
                        },
                        {
                            'hole12': {
                                'par': 3,
                                'distance': '201'
                            }
                        },
                        {
                            'hole13': {
                                'par': 4,
                                'distance': '403'
                            }
                        },
                        {
                            'hole14': {
                                'par': 5,
                                'distance': '572'
                            }
                        },
                        {
                            'hole15': {
                                'par': 4,
                                'distance': '396'
                            }
                        },
                        {
                            'hole16': {
                                'par': 4,
                                'distance': '401'
                            }
                        },
                        {
                            'hole17': {
                                'par': 3,
                                'distance': '177'
                            }
                        },
                        {
                            'hole18': {
                                'par': 5,
                                'distance': '543'
                            }
                        }
                    ]
                },
                {
                  'id': 3,
                  'name': 'Another Fake',
                  'city': 'Dallas',
                  'state': 'TX',
                  'courseLength': 18,
                  'holes':
                    [
                        {
                            'hole1': {
                            'par': 4,
                            'distance': '377'
                            },
                        },
                        {
                            'hole2': {
                                'par': 5,
                                'distance': '511'
                            }
                        },
                        {
                            'hole3': {
                                'par': 5,
                                'distance': '390'
                            }
                        },
                        {
                            'hole4': {
                                'par': 4,
                                'distance': '326'
                            }
                        },
                        {
                            'hole5': {
                                'par': 3,
                                'distance': '192'
                            }
                        },
                        {
                            'hole6': {
                                'par': 5,
                                'distance': '506'
                            }
                        },
                        {
                            'hole7': {
                                'par': 3,
                                'distance': '106'
                            }
                        },
                        {
                            'hole8': {
                                'par': 4,
                                'distance': '427'
                            }
                        },
                        {
                            'hole9': {
                                'par': 4,
                                'distance':'481'
                            }
                        }
                    ]
                }
            ]
        }
    });
}