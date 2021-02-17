class bob{
  constructor(x){
        var options ={
          isStatic:false,
          restitution:1,
          density:0.8,
          friction:1,
        }
    this.body = Bodies.circle(x,450,25,options);
    World.add(world,this.body);
    this.r =25;
  }
    display(){
        // push ();
         fill ("pink");
        // ellipseMode(CENTER);
        circle(this.body.position.x,this.body.position.y,this.r*2);
       // pop ()
    }
}