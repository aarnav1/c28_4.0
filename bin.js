class bin {
    constructor(x, y, width, height){
    var options ={
        isStatic: true
    }
    this.width = width;
    this.height = height;
    this.image = loadImage("images/dustbingreen.png");
    this.body = Bodies.rectangle(x, y, width, height, options); 
    World.add(world,this.body)};
    display(){
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        image(this.image, 650, 250, 100, 120);

    }
        
}

    

