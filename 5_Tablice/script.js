console.log(" ");
console.log(" ");
console.log("-------------zadanie 1---------------------------------------------------");


var elements = ["table", "chair", 1+2];

for(var i=0; i<elements.length;i++){
	console.log(elements[i] );
}



console.log(" ");
console.log(" ");
console.log("-------------zadanie 2-1---------------------------------------------------");

var fruits = ["orange", "mango", "lemon"];

console.log( "pierwszy owoc to " + fruits[0]);

console.log(" ");
console.log(" ");
console.log("-------------zadanie 2-2---------------------------------------------------");


//console.log( "ilosc owocow to " + fruits.length);

var u = fruits.length;
console.log(u);

console.log(fruits[(u-1)]);
	

//nie rozumiem dlaczego nie wyświetla mii 3go owocu - najpierw skorzystałam z length - a później stworzyłam zmienną równą length
console.log(" ");
console.log(" ");
console.log("-------------zadanie 2-3---------------------------------------------------");
for (var p=0; p < fruits.length; p++){
	console.log(fruits[p] );
}


console.log(" ");
console.log(" ");
console.log("-------------zadanie 3---------------------------------------------------");



console.log(" ");
console.log(" ");
console.log("-------------zadanie 4---------------------------------------------------");

var numbers = [3,91,3,3,41,5,10,10,10,10];
var sumaParzystych = 0;
var b = 0;

for(var k=0; k<numbers.length; k++){
		
	if 	(numbers[k]%2==0){
	
	console.log(" ");
	console.log(numbers[k]+" parzysta");
	b = b + numbers[k];
    
	}
	else if 	(numbers[k]%2!==0){
	console.log(" ");
	console.log(numbers[k]+" nieparzysta");}

}

sumaParzystych = (0+b);	
console.log("suma parzystych = " + sumaParzystych);

console.log(" ");
console.log(" ");
console.log("-------------zadanie 5---------------------------------------------------");

var max = " ";

for (m =0; m < numbers.length; m++){
	
	if (numbers[m]> max){
	max = numbers[m]}
	else if(numbers[m]< max){
	max = max}
	
}

console.log("najwieksza liczba = " + max);



/*
console.log("-------------zadanie 6-----------------");
// PROBA PIERWSZA

var firstIndex = " ";

var arrWithNumbers = [7,5,2,3,5,1,2,4,2];

for (var z = 0; z < arrWithNumbers.length; z++) {
	
	firstIndex = arrWithNumbers[z];
		
	for (var s = 0; s < arrWithNumbers.length; s++){
		
		var secondIndex = arrWithNumbers[s];
		
		if (z == s){
			console.log("ta sama liczba nie moze byc sobowtorem");
			
		}
		
		else if (secondIndex == firstIndex){
			
			console.log(firstIndex +" ta liczba sie powtorzyla");
			console.log(" ");
			break;
		}
		
		else if {
			
			console.log("liczba " +  firstIndex + " nie ma powtorzen");
			console.log(" ");
		}
		
		
	}
}
*/

// PROBA DROGA
/*
var firstIndex = " ";

var arrWithNumbers = [4,7,4,4,7,5,1,2,4,2];

for (var z = 0; z < arrWithNumbers.length; z++) {
	
	firstIndex = arrWithNumbers[z];
		
			for (var s = 0; s < arrWithNumbers.length; s++){
		
			var secondIndex = arrWithNumbers[s];
/*
			console.log(firstIndex + " = firstIndex dla z = " + z);
			console.log(secondIndex + " = secondIndex dla s = " + s);
			console.log(" ");
*/
	/*
	}
	if ((secondIndex = firstIndex) && (z!= s)){
			console.log(" ");
			console.log(firstIndex +" ta liczba sie powtorzyla jako pierwsza");
			
			break;
		}
		
		else if ((secondIndex != firstIndex) && (z !=s)) {
			
			
			console.log("liczba " +  firstIndex + " nie ma powtorzen");
			console.log(" ");
		}
		
	
	console.log(" koniec " + z + " petli");
}
			
*/

// PROBA TRZECIA - WYSWIETLANIE INDEXU A NIE WARTOSCI :)
console.log(" ");
console.log(" ");
console.log("-------------zadanie 6---------------------------------------------------");

var firstIndex = " ";

var arrWithNumbers = [1,1,2,5,6,7,8,3,3,9,10];
console.log(" ");
//console.log("ilosc liczb w zbiorze = " + arrWithNumbers.length);
console.log(" ");


for (var z = 0; z < arrWithNumbers.length; z++) {
	
	firstIndex = arrWithNumbers[z];
	
// console.log("SPRAWDZAMY " + z + " czyli wartosc = " + firstIndex);
		
			for (var s = 0; s < arrWithNumbers.length; s++){
		
			var secondIndex = arrWithNumbers[s];


	if ((secondIndex == firstIndex) && (z!== s)){
		
			
			console.log("mamy to!!!!!! szukana liczba ma wartosc "  + arrWithNumbers[s] + " jej INDEX to " + z + " a INDEX duplikatu to " + s);
			
			break;
	
		}
	
}

		if ((secondIndex == firstIndex) && (z!== s)){
		break;
}

}
	















