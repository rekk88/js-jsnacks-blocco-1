//--------------ES1 -------------------
var str1 = prompt("inserisci una parola : ");

var str2 = prompt("inseriscine un'altra :  ");

if(str1.length > str2.length)
{
    console.log("la parola piu corta è : " + str2);

}
else if(str1.length < str2.length){
        console.log("la parola piu corta è : " + str1);
    }
    else{
        console.log("le due parole : " + str1 +" e  " + str2 + "hanno la stessa lunghezza");
    }