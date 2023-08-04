document.addEventListener("click", trocaCor );

document.getElementById("btn").addEventListener("click", trocaNome );

function trocaCor(e)
{
    let nome = document.getElementById( "Cor" ).value
    document.getElementById( "Cor" ).innerHTML = "" + Cor;
    e.preventdefault();
}
function trocaCor( e ) {
    document.body.style.backgroundColor= 'black' ;
}