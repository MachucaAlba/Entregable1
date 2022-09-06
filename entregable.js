alert("¿Que desearias beber?")
let option1 = prompt(`Elija una opcion de bebida:
1. Agua
2. Limonada
3. Naranjada
4. Licuado
5. Gaseosa`);


let suma = " "
let total = 0 

while (option1 != "ESC" && option1 != "esc") {

switch(option1) {
case "1":
console.log('Valor 200')
suma= 200
break;

case "2":
console.log('Valor 450')
suma= 450
break;

case "3":
console.log('Valor 900')
suma= 900
break;

case "4":
console.log('Valor 900')
suma= 400
break;

case "5":
console.log('Valor 600')
suma= 600
break;
        
default:
console.log("No deseo comprar ningun producto");
suma = 0
break;
}

total += suma
option1 = prompt('Ingresa tu pedido y/o escribe ESC para terminar:')

}

alert('El total de su cuenta es: ${total}');

