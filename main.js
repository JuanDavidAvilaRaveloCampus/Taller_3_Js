

// Almacen
let formulario_sedes = document.querySelector('#formulario_sedes');// ID del form para almacenar los datos
let trainers = document.querySelector('#trainers inputs');// ID del form para almacenar los datos
let campers = document.querySelector('#campers');// ID del form para almacenar los datos
let roadMaps = document.querySelector('#roadMaps');// ID del form para almacenar los datos

//Nombres variablres:'))
let nombre = {};
let telefono = {};
let team = {};
let team2 = {};
let email = {};
let nivel = {};
let nivel2 = {};
let salon = {};
let piso = {};
let numero = {};
let asignatura = {};
let remota_o_precencial = {};


// let fomulario = document.querySelector(`#campus`);
let sedes = {};
let trainer = {
    // nombre, telefono, team, email, nivel, salon, piso, numero, asignatura, remota_o_precencial, nivel2, team2
};
let camper = {
    // nombre, telefono, team, email, nivel
};
let roadMap = {};
let campus = { sedes, trainer, camper, roadMap }; //objeto padre


// Seleccionan las etiquetas con esas clases
let seleccionar = document.querySelector(`#trainer_camper`); // Detector de cambios para desplegar el formulario de trainer o el de camper
let section_trainer = document.querySelector(`#section_Trainers`);
let section_camper = document.querySelector(`#section_Campers`);
let section_roadMap = document.querySelector(`#section_RoadMap`);

// Escuchadores de eventos

// Sedes
formulario_sedes.addEventListener('submit', (e)=>{ // (e) --> Significa 'evento'
    e.preventDefault(); //detiene al navegador, para que no redireccione a otra page
    let form_sedes = Object.fromEntries(new FormData(e.target)); // Almacena los datos del input de la forma ( calve / valor ) del input
    sedes[`${form_sedes.name_Sede}`] = []; // la sintaxis es {nombre_variable(objet.) + . + name del input del que se almacenarán datos}
    formulario_sedes.reset(); //---> Reinicia el formulario
});  


// Desplegar "Trainer o Camper"
seleccionar.addEventListener('change', (e)=>{
    // let trainer_camper = document.querySelector(`#trainer_camper`); // Almacena el valor de la opción seleccionada
    let trainer_camper = seleccionar.value;
    if (trainer_camper == ""){
            document.querySelector(`#section_Campers`).setAttribute('style', 'display: none;');
            document.querySelector(`#section_Trainers`).setAttribute('style', 'display: none;');
        } else if (trainer_camper == 'trainer'){
            document.querySelector(`#section_Trainers`).removeAttribute('style'); //detecta el id especificado dentro del documento y remueve el atributo espeficicado, en este caso el style
            document.querySelector(`#section_Campers`).setAttribute('style', 'display: none;');
    } else if (trainer_camper == 'camper'){
        document.querySelector(`#section_Campers`).removeAttribute('style');
        document.querySelector(`#section_Trainers`).setAttribute('style', 'display: none;');
    }
});

// Formulario Trainer
trainer.addEventListener('submit', (e) => {
    e.preventDefault();
    let chale = Object.fromEntries(new FormData(e.target));
    trainer[`${chale.trainer}`] = [];
    trainer.reset();
});

// let listaSedes = () => {
//     let opciones = document.querySelector("[name='sede']")
//     opciones.innerHTML = null;
//     for (let [val, id] of Object.entries(campus)) {
//         console.log(val);
//     };
// };

// Formulario Camper
campers.addEventListener('submit', (e)=>{

    e.preventDefault();
    console.log("holi");
    let camper = Object.fromEntries(new FormData(e.target));
    
    
    campers.reset();
});






// console.log(`${sedes[0]}`);
// console.log(`${campus[0]}`); ---> Preguntar: ¿Cómo hacer que se imprima el nombre de la sede?.




// sedes