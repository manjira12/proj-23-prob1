class Wall{
    constructor(x,y,width,height){
        var options={
            isStatic:false
        }
    
    this.body=Bodies.rectangle(x,y,width,height);
    this.width=width;
    this.height=height;
    World.add(World.this.body);
    }
display(){
    var pos=this.body.position;
    rectMode(center);
    fill("red");
    rect(pos.x,pos.y,this.width,this.height);
}
}
