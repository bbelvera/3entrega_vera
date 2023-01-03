inicializar();

// Declaramos variables globales, para guardar los datos ingresados //
let nombreFlores = [];
let domicilio = [];
let apellido = [];

// Inicializamos los eventos de click en cada botón que se va a utilizar // 
function inicializar() {
    document.querySelector("#btnGuardarDatos").addEventListener("click", guardarDatos);
    document.querySelector("#btnMostrarDatos").addEventListener("click", mostrarDatos);
    document.querySelector("#btnBuscar").addEventListener("click", buscarFlores);
}

// Inicializamos cada function que vamos a utilizar // 

function guardarDatos() {
    const nombreIngresado = document.querySelector("#txtNombre").value;
    const domicilioIngresado = document.querySelector("#txtDomicilio").value;
    const apellidoIngresado = document.querySelector("#txtApellido").value;

    nombreFlores.push(nombreIngresado);
    domicilio.push(domicilioIngresado);
    apellido.push(apellidoIngresado);
}

// Sección para mostrar los datos ingresados anteriormente // 

function mostrarDatos() {
    let datosGuardados = '<table border="1"><tr><th>Nombre</th><th>Domicilio</th><th>Apellido</th></tr>';

    for (let i = 0; i < nombreFlores.length; i++) {
        const nombreActual = nombreFlores[i];
        const domicilioActual = domicilio[i];
        const apellidoActual = apellido[i];

        datosGuardados += `
            <tr>
                <td>${nombreActual}</td>
                <td>${domicilioActual}</td>
                <td>${apellidoActual}</td>
            </tr>
        `;
    }

    datosGuardados += '</table>';

    document.querySelector("#divMensajes").innerHTML = datosGuardados;
}

// Sección para buscar algún dato ingresado anteriormente // 

function buscarFlores() {
    const apellidoBuscado = document.querySelector("#txtBuscar").value;
    let resultado = `No se han encontrado flores ${apellidoBuscado}.`;

    let apellidoEncontrado = false;
    let i = 0;
    while (!apellidoEncontrado && i < apellido.length) {
        const apellidoActual = apellido[i];
        if (apellidoBuscado === apellidoActual) {
            const nombreActual = nombreFlores[i];
            const domicilioActual = domicilio[i];
            
            resultado = `
                <table border="1">
                    <tr>
                        <th>Nombre</th>
                        <th>Domicilio</th>
                        <th>Apellido</th>
                    </tr>
                    <tr>
                        <td>${apellidoActual}</td>
                        <td>${nombreActual}</td>
                        <td>${domicilioActual}</td>
                    </tr>
                </table>
            `;

            apellidoEncontrado = true;
        }
        i++;
    }

    document.querySelector("#divMensajes").innerHTML = resultado;
}
