const view = document.getElementById('view');
const numeros = document.getElementsByClassName("number");
const soma = document.getElementById("plus");
const divisao = document.getElementById("division");
const subtracao = document.getElementById("minus");
const multiplicacao = document.getElementById("multiply");
const limpar = document.getElementById("clear");
const vazio = document.getElementById("empty");
const resultado = document.getElementById("equals");


const verificaString = () => {
    if(view.value =="") 
     {
            
        return false


    }
    if (!(view.value.includes("+") || view.value.includes("-") || view.value.includes("*") || view.value.includes("/"))) {

        return true;
    }
    else

        return false;
}









document.getElementById('equals').onclick = () => {

}

console.log(numeros);


for (let i = 0; i < numeros.length; i++) {

    numeros[i].onclick = () => {


        view.value = view.value + numeros[i].innerHTML;






    }
}



soma.onclick = () => {

    if(verificaString()) view.value += '+';
}



subtracao.onclick = () => {

   if(verificaString()) view.value+= "-";

}




multiplicacao.onclick = () => {

    if (verificaString()) view.value+= "*";

}



divisao.onclick = () => {


    if (verificaString()) view.value+= "/";

}

limpar.onclick = () => {


    view.value = " ";




}


resultado.onclick = () => {

 view.value = eval(view.value);



}


















