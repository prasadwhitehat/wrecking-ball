class Ball
{
    constructor(x,y)
    {
        var options={
            restitution:0.8
        }
        this.body=Bodies.circle(x,y,25,options);
              
        World.add(myworld,this.body);
    }

    display()
     {
        this.body.position.x=mouseX
        this.body.position.y=mouseY
         ellipseMode(RADIUS);
         ellipse(this.body.position.x,this.body.position.y,25,25);
     }   
    
}