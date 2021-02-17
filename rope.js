class rope{
  constructor(a, b,offsetX, offsetY){
      this.offsetX = offsetX;
      this.offsetY = offsetY;
        var options ={
            bodyA :a,
            bodyB :b,
            pointB:{x: this.offsetX, y:this.offsetY}
        }

        this.rope = Matter.Constraint.create(options)
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        var pointB2X=pointB.x+this.offsetX
		var pointB2Y=pointB.y+this.offsetY
        line(pointA.x,pointA.y,pointB2X,pointB2Y)
    }
}