console.log("inside warmup file");
class Circle{
  constructor(radius){
    this.radius=radius;
    this.PI=3.14;
  }
  
  getDiameter(){
    return this.radius*2;
  }

  getCircumference(){
    return 2*this.PI*this.radius;
  }

  getArea(){
    return this.PI*(this.radius*this.radius);
  }
  
}

const circle = new Circle(10);
const diameter = circle.getDiameter(); // 20
console.log(diameter);
const circumference =circle.getCircumference();
console.log(circumference);

const area= circle.getArea();
console.log(area);
