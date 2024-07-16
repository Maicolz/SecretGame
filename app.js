
var numeroSecreto;
var imputUser;
let intentos=1;
let numeroLista =[];
let numeroMaximo=10;


function updateLabel(label , message ){
    let elementoHTML = document.querySelector(label);
    //era un punto no = 
    elementoHTML.innerHTML = message;
}




function numberRandom(){
    numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1 ;
   
    console.log(`numero secreto ${numeroSecreto}`);
    console.log(numeroLista);
    // numeroLista.push(numeroSecreto);
    // console.log(numeroLista.length);

    //validar que el numero random no se repita
    if (numeroLista.length == numeroMaximo) {
        updateLabel('p', ' Se agotaron todos los números')
    }else {
        if(numeroLista.includes(numeroSecreto)){
            return numberRandom();
    
        }else {
            numeroLista.push(numeroSecreto);
            return numeroSecreto;
            
        }
    }
   
    
};



function checkerValue(botonId , imputID){

    document.getElementById(botonId).addEventListener('click' , function() {
        //definimos para que sea solo numeros para no comparar string con number 
        // si bien es cierto esta funcionando pero logicamente esta comparando string con number y eso no esta bien
        // imputUser= document.getElementById(imputID).value;
        imputUser= parseInt(document.getElementById(imputID).value);
        //para saber el tipo de variable que es 
        // console.log(typeof(imputUser));
        // console.log('el imput del usuario es ' +imputUser)
        // console.log(imputUser);
        // console.log(numeroSecreto);
        // console.log(numeroSecreto===imputUser);
            
        //codigo limpio sin pruebas ya jaja

        if(numeroSecreto===imputUser){
            updateLabel('p', `Acertaste  el número en ${intentos}  ${(intentos==1) ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');

        } else {
            if( imputUser> numeroSecreto){
                updateLabel('p', 'El número secreto es menor ');

            }else {
                updateLabel('p', 'El número secreto es mayor ');

            }
            intentos+=1;
            clean();
        }
       
    });

}




//llamamos la funcion 
checkerValue('intentar', 'valueUser');


function clean (){
  document.querySelector('#valueUser').value='';

}

function condicionesIniciales (){
    updateLabel('h1',' Adivina el número secreto' );
    updateLabel('p',`Rango  1- ${numeroMaximo}` );
    numberRandom();
    clean();
    
    intentos=1;

}



function nuevoJuego(){
    document.getElementById('reiniciar').addEventListener('click', function(){
        //limpia la caja
        //numero aleatorio reiniciado
        //numero de intentos reiniciado
        //mensajes reiniciados

        condicionesIniciales();

        // habilitar el disable 

        document.getElementById('reiniciar').setAttribute('disabled', true ) ;
        return;
    });


 }

 nuevoJuego();
 condicionesIniciales();





