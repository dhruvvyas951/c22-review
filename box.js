class box {

        constructor(x,y,width,height){

                var options = {

                    "restituition":0.6,
                    "density": 0.8,
                    "friction": 0.8

                }

            this.body = Bodies.rectangle(x,y,width,height,options);
            this.width = width;
            this.height = height;

            World.add(world,this.body);

        }

        display(){

            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            rotate(angle);
            fill('white');
            translate(pos.x,pos.y);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();

        }
}