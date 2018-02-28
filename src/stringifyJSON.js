// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifiableObjects = [
  9,
  null,
  true,
  false,
  'Hello world',
  [],
  [8],
  ['hi'],
  [8, 'hi'],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[], 3, 4]],
  [[[['foo']]]],
  {},
  {'a': 'apple'},
  {'foo': true, 'bar': false, 'baz': null},
  {'boolean, true': true, 'boolean, false': false, 'null': null },
  // basic nesting
  {'a': {'b': 'c'}},
  {'a': ['b', 'c']},
  [{'a': 'b'}, {'c': 'd'}],
  {'a': [], 'c': {}, 'b': true}
];

var stringifyJSON = function(obj) {

    if(typeof obj === "function") {
      return false;
    };

    if(Array.isArray(obj)) {
      if(obj.length === 0) {
        return "[]";
      } else {
      var str = "[";
      obj.forEach( function(piece) {
        str += stringifyJSON(piece) + ",";
      });
      return str.slice(0, -1) + "]" ; //slice off last comma, close array
      }
    };

    if(obj && typeof obj === "object") {
      if( Object.keys(obj).length === 0 ) {
        return "{}";
      } else {
      var res = [];
        Object.keys(obj).forEach( function(key) {
          if(typeof obj[key] !== "function" && obj[key] !== undefined) {
            var k = stringifyJSON(key);
            var val = stringifyJSON(obj[key]);
            res.push( "" + k + ":" + val);
          };

        });
      return "{" + res.join() + "}";
      }
    };

    if(typeof obj === "string") {
      return "\"" + obj + "\""
    };

    return String(obj);

  };
