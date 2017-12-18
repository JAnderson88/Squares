//Step 1
//Make an array of boxes

//Step2
//Use a loop that sets values in for each box starting from 1 to 9

//Array of colors
var arrayOfColors = ["rgb(255,255,255)", "green", "blue"]
class Squares{
    constructor(boxes){
        this.addClickHandler(this.number1, this.number2)
    }

    number1(){
        console.log("Running Number1")
    }

    number2(){
        console.log("Running Number2")
    }

    addClickHandler(){
        boxes.forEach(function(box){
            box.addEventListener('click', function(e){
                number1()
                number2()
            })
        })
    }
}

let squares = new Squares(boxes)
console.log(squares)