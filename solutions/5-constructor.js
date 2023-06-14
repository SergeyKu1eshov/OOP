// BEGIN
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.getX = function getX() {
  return this.x;
};

Point.prototype.getY = function getY() {
  return this.y;
};

// Segment constructor
function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
}

Segment.prototype.getBeginPoint = function getBeginPoint() {
  return this.beginPoint;
};

Segment.prototype.getEndPoint = function getEndPoint() {
  return this.endPoint;
};

// reverse function
function reverse(segment) {
  const beginPoint = new Point(segment.endPoint.x, segment.endPoint.y);
  const endPoint = new Point(segment.beginPoint.x, segment.beginPoint.y);
  return new Segment(beginPoint, endPoint);
}

export { Point, Segment, reverse };
// END
