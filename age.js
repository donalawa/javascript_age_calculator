function agecalc(){
	var y_birth = document.getElementById("age").value;
	y_birth = Number(y_birth);

	if(typeof(y_birth) === "number"){
		var c_year = 2019;
		var y_age = c_year - y_birth;
		
		document.getElementById("display").innerHTML = "You are " + y_age + " years old";
	}else{
		alert("Its not a number");
	}
}
   
   
