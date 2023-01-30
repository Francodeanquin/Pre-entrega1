
let nombre = prompt("Hola, ¿Podria indicarnos su nombre?");

for (i = 0; i >= 0; i++) {
    if (nombre === "") {
        nombre = prompt("Por favor indique su nombre");
    } else if (nombre != "") {
        alert("¡Bienvenido " + nombre + "!");
        break;
    }
}

let provincia = prompt("¿Se encuentra usted dentro de la provincia de Cordoba?");


if (provincia === "no" || provincia === "No" || provincia === "NO") {
    alert("lo sentimos, solo trabajamos dentro de Cordoba");
} else if (provincia === "si") {
    alert("Muy bien, sigamos!")
}

let km = prompt("¿A cuantos kilometros de distancia se encuentra?(Seleccione un numero) \n1- Entre 2 y 4km. \n2- Entre 4 y 6 km. \n3-Entre 6 y 8km \n4- Mas de 8km.")

switch (km) {
    case 1:
        km = "Entre 2 y 4km";

        break;

    case 2:
        km = "entre 4 y 6km";

        break;
    case 3:
        km = "entre 6 y 8km";

        break;
    case 4:
        km = "mas de 8km";
        break;
}

const costoEnvio1 = 400;
const costoEnvio2 = 600;
const costoEnvio3 = 800;

if (km == 1) {
    alert("Su costo de envio es de: " + costoEnvio1)
}else if (km == 2) {
    alert("Su costo de envio es de: " + costoEnvio2);
}else if (km == 3) {
    alert("Su costo de envio es de: " + costoEnvio3)
}else if (km == 4) {
    email = prompt("Por favor, ingrese un email para poder comunicarnos con usted.")
}


