class roof{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,500,30,{isStatic:true})
        World.add(world,this.body)
        this.w=300;
        this.h=30;
    }


    display(){
        push()
        fill ("brown")
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
        pop()
    }

}