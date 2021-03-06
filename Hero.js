class  Hero{
    constructor(x,y,r){
    var options = {
       friction:1,
       density:0.5
    }  
        this.body = Bodies.circle(x,y,r,options);
        this.radius = r
        this.image = loadImage("images/Superhero-02.png");
        World.add(world, this.body);    

    }

  display(){
    var angle = this.body.angle;
    var pos = this.body.position
    push(); 
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0, 0, this.radius, this.radius);
    pop();
  }  
};
