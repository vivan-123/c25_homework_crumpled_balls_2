class Rectangle2
{
    constructor(x,y,w,h)
    {
        var options =
        {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.body.position.x = x;
        this.body.position.y = y;
        this.body.width = w;
        this.body.height = h;
        this.trash = loadImage("images/dustbin.png")
        World.add(world, this.body);
    }

    display()
    {
        fill("white");
        rect(this.body.position.x,this.body.position.y,this.body.width,this.body.height);
        
    }
}
