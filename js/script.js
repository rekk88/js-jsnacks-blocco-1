//--------------ES1 -------------------
var str1 = prompt("inserisci una parola : ");

var str2 = prompt("inseriscine un'altra :  ");

if(str1.length > str2.length)
{
    console.log("la parola piu corta è : " + str2);
    document.getElementById("output").innerHTML= "la parola più corta è : " + str2;

}
else if(str1.length < str2.length){
        console.log("la parola piu corta è : " + str1);
        document.getElementById("output").innerHTML= "la parola più corta è : " + str1;

    }
    else{
        console.log("le due parole : " + str1 +" e  " + str2 + "hanno la stessa lunghezza");
        document.getElementById("output").innerHTML="le due parole : " + str1 +" e " + str2 + " hanno la stessa lunghezza";
    }



//---------------ES 2------------------------

var numbers = [];
for(let i=0 ; i<6 ; i++){
    numbers[i]=Math.floor(prompt("inserisci un numero : "));
}
console.log(numbers);

var numero=0;
var somma=0;
var i=0;

for(i=0 ; i<5 ; i++){
    numero = Math.floor(prompt("inserisci un numero : "));
    somma += numero;
    if(numero % 2 == 0){
        document.getElementById("pari").innerHTML += " "+ numero + " ";
    }
}
document.getElementById("output").innerHTML= "la somma è : " + somma;