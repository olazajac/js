console.log("-----------zadanie 1 ------------");
	var first = 5;
	var second = 10;

	if(first > second) 
{
	console.log("first jest większe");
} 

	else if (second > first)
{
	console.log("second jest wieksza");
}
console.log(" ");
console.log(" ");
console.log("-----------zadanie 2 ------------");
	var a = 50;
	var b = 339999;
	var c = 3888;

	if (a > b && a > c)
{
	console.log("A jest najwieksza");
}
	else if (b > a && b > c)
{

	console.log("B jest najwieksza");
}

	else if (c > b && c > a){
	
	console.log("C jest najwieksza");
} 
console.log(" ");
console.log(" ");
console.log("-----------zadanie 3 ------------");
	for(var count = 1; count <= 10; count++) {

	console.log("Lubie Java Script");
	console.log(" ");

}
console.log(" ");
console.log(" ");
console.log("-----------zadanie 4 ------------");
	var result = 0;

	for(var x = 0; x <= 10; x++) {
	
	result = result + x;
	
}

console.log("suma 1-10 to " + result);
console.log(" ");
console.log(" ");
console.log("-----------zadanie 5 opcja 1 ------------");
var n = 5;

for(var y = 0; y <= n; y++  ) {
	
	if(y==1 || y==3 || y==5) {
		
	
	console.log(y+"nieparzysta");}
	
	else if(y==2 || y==4 ) {
		
	console.log(y+"parzysta");}
	
	
}
console.log(" ");console.log(" ");
console.log("-----------zadanie 5 opcja 2 ------------");

var n = 10;

for(var y = 0; y <= n; y++ ) {
	
	if(y%2==0 && y!==0) {
		
	console.log(y+" parzysta");}
	
	else if(y%2==1) {
		
	console.log(y+" nieparzysta");}
	
	else if(y==0){
		
	console.log(y + " nie wiem czy zero jest parzyste czy nie");}	
	
}


/* nie rozumiem zadania 6 :(*/



//OPCJA A 
console.log(" ");
console.log(" ");
console.log("-----------zadanie 8 opcja A ------------");

	var size = 5;
	var add = 1;

	var lineOfStars = "";

	for(var i = 0; i < size; i++) {
    
//	lineOfStars = "";
    
    for(var j = 0; j < add; j++) {

    lineOfStars = lineOfStars + "*";
    
	
}

    console.log(" ");

    console.log(lineOfStars);
}



//OPCJA B 
console.log(" ");
console.log(" ");
console.log("-----------zadanie 8 opcja B ------------");
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
	x = " ";
    
    for(var j = 0; j <= i; j++ ) {
        //Do zmiennej x dodaje gwiazdkę
       
		x = x + "*";
    
}

    console.log("");

     console.log(x); 


}


// dodatkowe 1
console.log(" ");
console.log(" ");
console.log("-----------zadanie 9 ------------");
var size = 5;
var lineOfStars = "";

for(var i = 0; i < size; i++) {
   
	x = " ";
    
    for(var j = 1; j <=size; j++ ) {
   
       
	if(j<=i+1){
	x = x + ("*");
	}
	else if (j>i) {
	x = x + (j);
}   
}
    console.log("");
	console.log(x);

}
var size = 5;
var x = "";

for(var i = 0; i < size; i++) {
   
	x = " ";
    
    for(var j = 1; j <=size; j++ ) {
       
       
	   if(j>=6-i){
		x = x + (j);
		
	   }
	   else if (j<6-i) {
		x = x + ("*");
	   }
}
   
    console.log("");
	console.log(x);

}


console.log(" ");
console.log(" ");
console.log("-----------zadanie 10 ------------");


var t = 3;


for (v=1; v <= t; v++){
	
	
	for (var aa=1; aa <= t; aa++){
		

	console.log(v + " x " + aa + " = " + (v*aa)); console.log("|");
	
	}

}
	






















