

/*

	var first = 5;
	var second = 10;

	if(first > second) 
{
	console.log("first jest większe");
} 

	else if (first < second)
{
	console.log("first jest mniejsze");
}


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


	for(var count = 1; count <= 10; count = count + 1) {

	console.log("Lubie Java Script");
	console.log(" ");

}


	var result = 0;

	for(var x = 0; x <= 10; x++) {
	
	result = result + x;
	
}

console.log(result);


var n = 5;

for(var y = 0; y <= n; y=y+1  ) {
	
	if(y==1 || y==3 || y==5) {
		
	
	console.log(y+"nieparzysta");}
	
	else if(y==2 || y==4 ) {
		
	console.log(y+"parzysta");}
	
	
}

var n = 10;

for(var y = 0; y <= n; y=y+1  ) {
	
	if(y%2==0 && y!==0) {
		
	console.log(y+" parzysta");}
	
	else if(y%2==1) {
		
	console.log(y+" nieparzysta");}
	
	else if(y==0){
		
	console.log(y);}	
	
}


/* nie rozumiem zadania 6 :(*/



// OPCJA 01
/*
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
*/


//OPCJA 02 
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
	x = "";
    
    for(var j = 0; j <= size-1; j++ ) {
        //Do zmiennej x dodaje gwiazdkę
       
		x = x + j;
    
}
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log("");

    //Wypisuje w konsoli zmienną x (jej zawartość - dlatego jest bez cudzysłosów)
     if(i==1){  console.log("aaa"); }
else if(i!==1){  console.log(x+1); }

}

/*

var size = 5;

for(var i = 0; i < size; i++) {
   
		for(var j = 0; j < size; j++) {
			
				if(j<=i){ console.log("*");}
				
				else if(j>i){console.log(j+1);}
		
		}
		

}
		
console.log(" ");



/*
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}


*/
