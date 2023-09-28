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
   
