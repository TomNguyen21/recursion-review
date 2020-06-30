// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var results = '';
  if (typeof obj !== 'function' && typeof obj !== 'undefined') {

    if (Array.isArray(obj)) {
      if (obj.length === 0) {
        results += '[]';
      } else {
        results += '[';
        for (var i = 0; i < obj.length; i++) {
          if (i === obj.length -1) {
            results += stringifyJSON(obj[i]) + ']';
          } else {
            results += stringifyJSON(obj[i]) + ','; // ['string', '9', 'true', 'null']
          }
        }
      }
    }
    // if (typeof obj === 'object') {
    //   var keys = Object.keys(obj);
    //   if (keys.length === 0) {
    //     results += '{}';
    //   }
    // }
    else if (typeof obj === 'object') {

      if (obj === null) { // {null}
        results += 'null';
      } else  {
        var keys = Object.keys(obj);

        if (keys.length === 0) {
          results += '{}';
        } else {
          results += '{';
          for (var i = 0; i < keys.length; i += 1) {

            if (typeof obj[keys[i]] !== 'function' && typeof obj[keys[i]] !== 'undefined') {
              results += '"' + keys[i] + '"' + ":";
              results += stringifyJSON(obj[keys[i]]);

              if (i !== keys.length - 1) {
                results += ',';
              }
            }
          }
          results += '}';
        }

      }

    }
    if (typeof obj === "number") {
      results += obj;
    }
    if (typeof obj === 'boolean') {
      results += obj;
    }
    if (typeof obj === 'string') {
      results += '"' + obj + '"';
    }
  }

  return results;

};

// {null, undefined}