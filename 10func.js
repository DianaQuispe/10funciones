

/*
1.- Crear una función que me diga si un número es capicúa o no (Nota:
un número capicúa es aquel que se lee igual de izquierda a derecha,
como de derecha a izquierda)
 Ejemplo( 112211, 565, 1234554321), la entrada es tipo numérico.
*/
function numero(n) {
 
    if (n == n.split("").reverse().join("")){
      return "es capicua";
    } else {
      return "no es capicua";
    }
  
}
console.log(numero(("112211")));

/*
2.Crear una función que me permita calcular la potencia de un número N
elevado a la M (ejemplo NM).
 Entrada N=2; M=3;
 Salida 8
 */
function potencia(n,m) {
  
  var s =1;
  for( var i =0; i <m; i ++) {
  var s = s * n;

  }
  console.log(s);
}
 potencia(5,3);
/*
3.- Crear una función que dado un arreglo de String A me permita contar
cuantas veces se repite un caracter C en dicho arreglo.
 Entrada: A=[“murcielago”, “pato”,”caballo”, “zebra”]; C=”a”;
 Salida: 5;
 */
function num(a,b) {
  var s = "";
  var x = ["aeiou"];
  for(var i =0; i <a.length; i++) {
    for(var j =0; j<a[i].length; j++) {
      if(a[i].charAt(j) == b) {
        s+=b;
      }
    }
  }
   console.log(s.length);
}
num(["murcielago", "pato","caballo", "zebra"],"a")

/*
4.- Escriba una función que cuente cuántas palabras hay una cadena de
texto
Entrada : A=”El mundo es tan cruel”;
Salida : 5 
*/
function mira(cad) {
  var a = cad.split(" ");
  for(var i =0; i <a.length; i++)  {
    }
  console.log("Tiene " + i + " palabras.");
}
mira("El mundo es tan cruel");
/*
5.- Escriba una función que dado un arreglo A de string me dé como
resultado el tamaño más largo de todas las palabras.
Entrada : A=[“gato”,”Perro”,”Cocodrilo”,”leon”];
Resultado: 9

*/
function arra(a) {
  var s = "";
  var n = 0;
  for(var i =0; i <a.length; i++) {
    if (a[i].length > n) {
        n = a[i].length;
        s = a[i];
    }
  }
  console.log("El tamaño mas largo de todas las palabras es: " + s.length);
} 
arra(["gato","Perro","Cocodrilo","leon"]);

/*
6.- Escriba una función que dado un arreglo A de string me calcule
cuántas vocales hay en todo el arreglo.
Entrada : A=[“ojo”,”mouse”,”lapiz”];
Salida: 7
function string(str) {
 for(var i =0; i<str.length; i++){
   for(var j =0; j<str[i].length; j++) {
       var vocals = ["aeoiu"];
      if(str[i].charAt(j) == vocals[i].charAt(j))
      {console.log()
   }
 }
}
}
string(["ojo","mouse","lapiz"]);
*/
/*
7.- Escriba una función que calcule la sumatoria de todos los números
impares comprendidos entre los números N y M
Entrada: N=1; M=7
Salida: 16
*/
var a = 0;
function suma(n,m) {
  for(var i = n; i<= m; i++) {
    if(i %2 == 1)
     a+=i;
   } 
  console.log(a);
}
suma(1,7);
/*
8.- Escriba una función que dado un arreglo de string devuelva la palabra
mas larga
Entrada A=[“jirafa”,”leon”,”gato”,”murcielago”,”rata”]
Salida “murcielago”

*/
function arra(a) {
  var s = "";
  var n = 0;
  for(var i =0; i <a.length; i++) {
    if (a[i].length > n) {
        n = a[i].length;
        s = a[i];
    }
  }
  console.log("La palabra más larga del arreglo es " + s);
} 
arra(["jirafa","leon","gato","murcielago","rata"]);

/*
/*
9.- Escriba una función que dado una de cadena de texto S me devuelva
el reverso de la cadena de texto.
Entrada: S=”roma”
Salida: “amor”

*/
function invertir(cadena) {
  var x = cadena.length; //4
  var str = "";
 
  while (x>=0) {
    str = str + cadena.charAt(x);
    x--;
  }
   console.log(str);
}
invertir("roma");