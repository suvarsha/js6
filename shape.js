class shape{
    constructor(b){
        this.b=b
    }
    area()
    {
        console.log("area of ")
    }}
class circle extends shape{
   constructor(r)
   { super()
       this.r=r
   }
     area()
    { //super.area()
        console.log("area of circle"+3.14*this.r*this.r)
    }
}
class rectangle extends shape{
    constructor(l,b)
    { super()
        this.l=l
        this.b=b
    } 
    area()
    { super.area()
        console.log("area of rectangle"+this.l*this.b)
    }
}
var obj=new rectangle(5,4)
obj.area()
var obj1=new circle(4)
obj1.area() 