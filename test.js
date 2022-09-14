
function phone (brend, model, camera, memory, weight){
    this.brend  =  brend;
    this.model = model;
    this.camer =  camera; 
    this.memory = memory;
    this.weight = weight;
    this.sayWeight = function (){
        weight > 200 ?
         console.log("This is no my favorite!"):
         console.log("This is my favorite phone");
    };
} 

const iphone13 = new phone ("Iphone", "13","16mp", "128GB", 174);
console.log(iphone13);
iphone13.sayWeight();
const samsungS20 = new phone ("samsung", "S20","16mp", "256GB", 154);
console.log(samsungS20);
samsungS20.sayWeight();
