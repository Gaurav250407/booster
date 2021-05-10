class ROPE
{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options =
        {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
           
        }
        this.body=Matter.Constraint.create(options);
        World.add(world,this.body);

    }
    display()
    {
        var pointA = this.body.bodyA.position;
        var pointB = this.body.bodyB.position;

        var anchorAx = pointA.x+this.offsetX;
        var anchorAy = pointA.y+this.offsetY;

        var anchorBx = pointB.x;
        var anchorBy = pointB.y;

        strokeWeight(2);
        stroke("white");
        line(anchorAx,anchorAy,anchorBx,anchorBy);
    }
}