class Stone{
constructor(x,y,width,height) {
    var options = {
       
        restitution:0,
        friction:1,
        density:1.2
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    
    this.image = loadImage("Plucking mangoes/stone.png");
    
    
  }
   display(){
      
        push();
        translate (this.body.position.x,this.body.position.y);
        rotate (this.body.angle)
        imageMode(CENTER);
        image(this.image, 0, 0,30,30);
        pop();
      }
};
