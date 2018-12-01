var rand = Math.floor(Math.random()*20) + 1;
var rand2 = Math.floor(Math.random()*20) + 1;
if(rand2 > rand){
	var temp = rand2;
	rand2 = rand;
	rand = temp;
}
var ops=['+','-','*','/'];
//random operator

var opindex = Math.floor(Math.random()*3); //good that your rnum2 cannot be zero
var operator = ops[opindex];

//calculate the expected result:
var res;
switch (opindex){
  case 0: 
	res = rand + rand2; 
	break;
  case 1: 
	res = rand - rand2; 
	break;
  case 2: 
	res = rand * rand2; 
	break;
  case 3: 
	res = rand/rand2; 
	break;
}	
	
function generateQuestion(){
		document.getElementById('question').innerHTML='Solve: '+rand+' '+ops[opindex]+' ' + rand2;
}
generateQuestion();


function userSubmit() {
	var UI = document.getElementById('userInput').value;
	if((/\D/.test(UI))){
		alert('Input Error: Numbers only..');
	}else{
		if(UI == res && UI!=""){
		//document.getElementById('result').innerHTML='Your answer is Correct!';
		alert('Your answer is Correct!');
		document.location.reload(true);
		} else{
			//document.getElementById('result').innerHTML='Sorry, try again!';
			alert('Sorry, try again!');
		}			
	}
} // end of user submit function