//Boxes elements
const boxes = document.querySelectorAll('.col')

//Color array
const colors = [
    'rgb(255, 255, 255)', 
    'rgb(255, 165, 0)', 
    'rgb(0, 128, 0)', 
    'rgb(128, 0, 128)', 
    'rgb(255, 192, 203)'
]

//Apply the numbers in the boxes
for(let i=0; i<boxes.length; i++){
   boxes[i].textContent = (i+1).toString()
}

class Squares{
    constructor(/*set up class params here*/){
        this.addClickHandlers()
    }

    changeNumber(num, boxes){
        if(num > 1){
            //Set up recursion here
        }
    }

    changeColor(num, colors, boxes){
        if(num > 1){
            //Set up recursion here
        }
    }

    increment(){

    }

    addClickHandlers(/*Param*/){
        boxes.forEach(function(box){
            box.addEventListener('click', function(e){
                changeNumber(/*Params*/)
                changeColor(/*Params*/)
            })
        })
    }

}

let squares = new Squares(boxes, colors)