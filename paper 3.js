class paper{
    constructor(){
        var options={isStatic:false,restitution:0.3,friction:0.5,density:1.2}
        this.paper = Bodies.circle(200,200,20, options);
        World.add(world, this.paper);
        
    }

    display(){
       ellipse(this.paper.position.x,this.paper.position.y, 200,1,40) 
    }
}