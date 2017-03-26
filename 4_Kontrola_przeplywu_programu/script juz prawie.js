
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
	x = " ";
    
    for(var j = 1; j <=size; j++ ) {
        //Do zmiennej x dodaje gwiazdkę
       
	   if(j<=i+1){
		x = x + ("*");
	   }
	   else if (j>i) {
		x = x + (j);
	   }
    
}
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log("");

    //Wypisuje w konsoli zmienną x (jej zawartość - dlatego jest bez cudzysłosów)

 console.log(x);

}


var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var x = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
	x = " ";
    
     for(var j = 1; j <=size; j++ ) {
        //Do zmiennej x dodaje gwiazdkę
       
	   if(j>=i+1){
		x = x + ("*");
	   }
	   else if (j<i+1) {
		x = x + (j);
	   }
    
}
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log("");

    //Wypisuje w konsoli zmienną x (jej zawartość - dlatego jest bez cudzysłosów)

 console.log(x);

}






