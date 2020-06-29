// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// should use childNodes and classList document.body

var getElementsByClassName = function(className, node
) {
  // your code here
  var results = [];
  var element = node || document.body;

  if (element.classList && element.classList.contains(className)) {
    results.push(element);
  }

  if (element.childNodes) {
    element.childNodes.forEach (function (childNode) {
      // console.log(childNode)
      results = results.concat(getElementsByClassName(className, childNode));
      // element.removeChild(childNode);
    })
  }

  // console.log(results)
  return results;


};


/*if (element.childNodes) {
  result = result.concat(getElementsByClassName(element))
}

fn (classname, node) {
  let
}
*/