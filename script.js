
var btnA = document.getElementById('add');
var btnS = document.getElementById('subtract');
var btnM = document.getElementById('multiply');
var btnD = document.getElementById('divide');



btnA.addEventListener("click", prnt);
btnS.addEventListener("click", prnt);
btnM.addEventListener("click", prnt);
btnD.addEventListener("click", prnt);

var res = document.getElementById('result');


function eval(id){
    var chk = id;
    

    var a = document.getElementById("input1").value*1;
    var b = document.getElementById("input2").value*1;

    
    switch(chk){
        case "add" : return a+b; 
        break;

        case 'subtract' : return a-b;
        break;

        case 'multiply' : return a*b;
        break;

        case 'divide' : return a/b;
        break;

        default : return 'error';
    }
}

function prnt(){
    //console.log(this.id);
    //eval(this.id);
    
 var r = eval(this.id);
  res.innerHTML = r;
}