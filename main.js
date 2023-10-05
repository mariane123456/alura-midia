function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        //alert('elemento não encontrado');
        console.log('elemento não encontrado ou eletor inválido')
    }

}
   
const listaDeteclas = document.querySelectorAll('.tecla');

//para
for(let contador< listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    cont instrumento = tecla.classlist[1];
    const idAudio = '#som_${instrumento}'; //template tring
}

