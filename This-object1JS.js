/*console.log(this.alert('Jesus is my Saviour!'))
console.log(this)*/
/*
let Prayer ={
    To:'In Lord God Almighty',
    Name:"I Jesus Name"
    
}
console.log(Prayer.To)*/
/*
To='In Lord God Almighty',
Name=" Jesus Name"
let Prayer ={
    To:'In Lord God Almighty',
    Name:" Jesus Name",
    print:()=>{
        console.log(`${this.To} we have to pray in ${this.Name}`)
    }
    
}
Prayer.print();
console.log(Prayer) */

let Car={
    Name:'C class',
    Manufacture:'BMW',
    print1: function() {
       
       
        console.log(this)
        
    }
}
/*
console.log( Car.print1())
console.log(Object.keys(Car))
console.log(Object.values(Car))*/
console.log(Car)
console.log(Car.hasOwnProperty('Name'))
