// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };


var getElementsByClassName = function(className) {

  var initialNode = document.body;

  var nodeSplitter = function(node) {

      var buildElementArr = [];

    if (node.classList && node.classList.contains(className)) {
        buildElementArr.push(node);
      }

    for (var i = 0; i < node.children.length; i++) {
      var childNode = nodeSplitter(node.children[i]);
      buildElementArr = [...buildElementArr, ...childNode];

    };

    return buildElementArr;

  };

  return nodeSplitter(initialNode);

};
