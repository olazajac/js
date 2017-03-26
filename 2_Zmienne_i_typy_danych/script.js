var zmienna_jako_liczba = 2;
console.log(zmienna_jako_liczba);
console.log(typeof zmienna_jako_liczba);

var zmienna_jako_string = "liczba dwa";
console.log(zmienna_jako_string);
console.log(typeof zmienna_jako_string);

var zmienna_jako_string_i_liczba = (100 + "minus"); // tutaj zidentyfikowało mi tylko string
console.log(zmienna_jako_string_i_liczba);
console.log(typeof zmienna_jako_string_i_liczba);

var zmienna_jako_wartosc_logiczna = true;
console.log(zmienna_jako_wartosc_logiczna);
console.log(typeof zmienna_jako_wartosc_logiczna);

var zmienna_jako_wartosc_specjalna = null;
console.log(zmienna_jako_wartosc_specjalna);
console.log(typeof zmienna_jako_wartosc_specjalna);



var liczba_1 = 1;
var liczba_2 = 10;
var result = 0;


var result = liczba_1 + liczba_2 + result;

console.log(result);
// dziwne :) bo przecież zdefiniowałam result jako "0" a później  result było częścią sumy gdzie było też wynikiem ... czyli czegoś tu nie rozumiem :)

var cokolwiek;

console.log(cokolwiek);
//wartość niezdefiniowana