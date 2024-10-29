function agregar(valor) {
   document.getElementById('pantalla').value += valor;  //Esto agrega a la pantalla el valor del botón de la calculadora que se clickea
}

function borrar() {
    document.getElementById('pantalla').value = ''; //Esto limpia la pantalla de la calculadora
}

function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla); //Eval convierte el valor de la pantalla en una operación matemática
    document.getElementById('pantalla').value = result;
}