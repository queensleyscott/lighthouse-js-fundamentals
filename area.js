const calculateRectangleArea = function (length, width) {
  if (length > 0 && width > 0)
  return length * width
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));

const calculateTriangleArea = function (base, height) {
  if (base > 0 && height > 0)
  return base * height / 2
}

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

function calculateCircleArea(radius) {
  var circle = Math.PI * Math.pow(radius, 2);
  if (circle >= 0 && radius >= 0) {
  return circle;
  } else {
  return undefined;
  }
} 

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); 
