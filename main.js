// let fomulario = document.querySelector(`#campus`);
let sedes = {};
let trainer = {};
let camper = {};
let roadMap = {};
let campus = [sedes, trainer, camper, roadMap]; //objeto padre

// Seleccionan las etiquetas con esas clases
let formulario_sedes = document.querySelector('#formulario_sedes');// ID del form para almacenar los datos
let seleccionar = document.querySelector(`#trainer_camper`); // Detector de cambios para desplegar el formulario de trainer o el de camper
let formulario_trainer = document.querySelector(`#section_Trainers`);
let formulario_camper = document.querySelector(`#section_Campers`);
let formulario_roadMap = document.querySelector(`#section_RoadMap`);

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
formulario_trainer.addEventListener('submit', (e)=>{
    e.preventDefault();
    let trainer = Object.fromEntries(new FormData(e.target));
    
    
    formulario_trainer.reset();
});

// Formulario Camper
formulario_camper.addEventListener('submit', (e)=>{

    e.preventDefault();
    console.log("holi");
    let camper = Object.fromEntries(new FormData(e.target));
    
    
    formulario_camper.reset();
});
formulario_roadMap.addEventListener('submit', (e)=>{


    e.preventDefault();
    let roadMap = Object.fromEntries(new FormData(e.target));
    
    
    formulario_roadMap.reset();


});





// console.log(`${sedes[0]}`);
// console.log(`${campus[0]}`); ---> Preguntar: ¿Cómo hacer que se imprima el nombre de la sede?.




// sedes