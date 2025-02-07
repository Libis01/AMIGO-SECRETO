// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//VARIABLES

let amigos = [];

function agregarAmigo() {

    //validar input que este vacio
    let valida = document.querySelector("#amigo").value;
    if(valida == ""){
        alert("Por favor ingrese los nombres")
    }

    //agregar nombre ingresados
    let agregar = document.querySelector("#amigo").value;
    amigos.innerHTML = amigos.push(agregar);

    // limpio el campo
    let limpiar = document.querySelector("#amigo").value = "";

    //valido que el campo este vacio, evito repetir al mostrar
    let mostrar = document.getElementById("listaAmigos");
    mostrar.innerHTML = ""

    //recorro arreglo y creo la lista para mostarlos
    for (let index = 0; index < amigos.length; index++) {
        let lista = document.createElement("li");
        lista.innerHTML = amigos[index];

        mostrar.appendChild(lista)
    }
}


function sortearAmigo() {
     
    //evito repetir cuando se vuelva a sortear
    let listaResultado = document.getElementById("resultado");
     listaResultado.innerHTML = "";

     //valido si hay amigos disponibles para sortear
     if (amigos == "") {
        alert("Ingresa a tus amigos para iniciar el sorteo")
     } else {

        //empiezo sorteo
        let sorteo = Math.floor(Math.random()*amigos.length);

        //creo la lista a mostrar el amigo seleccionado
        let amigoSeleccionado = document.createElement("li");
        amigoSeleccionado.innerHTML = amigos[sorteo];

        listaResultado.appendChild(amigoSeleccionado);

     }

}