var circles = [];

function onKeyDown(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = randomPoint * maxPoint;
    var circle = new Path.Circle(point, 200);
    circle.fillColor = randomColor();
    circles.push(circle);
}

function onFrame(event) {

    circles.forEach(function(circle){
        circle.fillColor.hue += 1;
        circle.scale(.95);
    });
}
