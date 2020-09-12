
var  index = 0;

let num = [];
var operator = false;
$(document).ready(function() {

    // Your code here...
      // array with the equation 
      num[0] = " ";
   document.getElementById("button-equal").addEventListener("click",output);
   document.getElementById("button-plus").addEventListener("click", opClick);
   document.getElementById("button-minus").addEventListener("click", opClick);
   document.getElementById("button-multiply").addEventListener("click", opClick);
   document.getElementById("button-power").addEventListener("click", opClick);
   document.getElementById("button-divide").addEventListener("click", opClick);
   document.getElementById("button-clear").addEventListener("click", clear);
 


    // get the inputs 
    //let equation = [];


    for (let i = 0; i< 10; i++){
        let getInputs = document.getElementById("button-" + i);
        getInputs.addEventListener("click", displayNumber);
    }
    
    function displayNumber(){

        if (this.value ){
            if (num[index] === undefined){

                num [index] = this.value;
            }else {
                num[index] += this.value;
            }
        }
        console.log(num[index]);
        
    }

    function opClick()
    { 
        
            index++;
            num[index] = this.value;
            console.log(num[index]);
            index++;
        
    };



    function output(){
        num.forEach(function(getInputs){
            console.log(getInputs);
        })
        let adding = " ";
        switch(num[1]){
             case "plus":
                  adding = parseInt(num[0]) + parseInt(num[2]);
                break;
            
             case "minus":
               adding =  parseInt(num[0]) - parseInt(num[2]);
                break;
            case "times":
                adding = parseInt(num[0]) * parseInt(num[2]);
                break;
            case "divide":
                adding = parseInt(num[0]) / parseInt(num[2]);
                break;
            case "power":
                adding =  Math.pow(parseInt(num[0]),parseInt(num[2])) ;
                break;
                
              
        }

        document.getElementById("first-number").textContent = parseInt(num[0]);
       // document.getElementById("first-operator").textContent = " ";
        document.getElementById("second-number").textContent = parseInt(num[2]);


        document.getElementById("result").textContent = adding; 
        num = [];
      
       
    }

    function clear (){
        num = [];
        index = 0;
        document.getElementById("result").textContent = ''; 
    }

    });

  




  

    // differentiate different buttons 
    // store the inputs into the eqution array 

    // create the funtion with output value (this will go into the solution array);




    // solution array 

    // display the solution 