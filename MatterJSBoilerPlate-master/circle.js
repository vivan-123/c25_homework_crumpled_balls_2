class Circle
{
    constructor(x,y,radius)
    {   
        var options =
        {
           'weight' : 1,
           'friction' : 1
        }

        this.body = Bodies.circle(x,y,radius,options)
        this.body.position.x = x;
        this.body.position.y = y;
        this.body.radius = radius;
        this.circle1 = loadImage("images/ball.png");
        World.add(world, this.body);

       
    }

    display()
    {
        imageMode(RADIUS);
        image(this.circle1, this.body.position.x, this.body.position.y, this.body.radius, this.body.radius);
        //circle(this.body.position.x,this.body.position.y,this.body.radius);
    }
}