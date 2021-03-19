class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius=50
        
        
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y+70,this.radius,this.radius);
    }
}