// formulario_sedes.style.color = "red"


// SEDES
let formulario_sedes = document.querySelector("#formulario_sedes");// EL ID ES DEL FORM
let sedes = {};

formulario_sedes.addEventListener("submit", (e)=>{
    e.preventDefault(); // No olvidar agregarle los paréntesis() // detiene el evento del formulario, y pasa toda la info al js
    let data = Object.fromEntries(new FormData(e.target));
    // Objet.fromEntries(new FormData(e.target)) --> "Toma a todos los input's que
    // tengan el atributo 'name' como variables, y para el dato..."
    sedes[`${data.name_Sede}`] = {}; // El 'name_Sede' es el name del input
    alert(`"${data.name_Sede}" ha sido agregado como una de las nuevas sedes de CAMPUS`);
    formulario_sedes.reset();
});

// SELECT: Despliega el formulario de Campers o Trainer, según sea la opción.
let trainer_camper = document.querySelector('#trainer_camper');
let section_Trainers = document.querySelector('.section_Trainers');
let section_Campers = document.querySelector('.section_Campers');

trainer_camper.addEventListener("change", (e)=> {
    if (e.target.value == 'trainer'){
        section_Trainers.removeAttribute('class');
    } else if (e.target.value == 'camper'){
        section_Campers.removeAttribute('class');
    }
    // trainer_camper.reset();
});

// TRAINER
let trainers = document.querySelector('#trainers'); //esta variable es global (es el form de todo el formulario llamado "TRAINER")
let objeto_Trainers = {}; //este objeto es global para todo el bloke "TRAINERS"
// Nombre:
/**
 * !IMPORTANTISIMO
 * * Toca almacenar un objeto dentro de otro objeto, en este caso: almacenar
 * * los objetos nombre, teléfono, team, etc; dentro del objeto 'objeto_Trainers'
 */

trainers.addEventListener('submit', (e)=>{
    e.preventDefault();
    let data =Object.fromEntries(new FormData(e.target));
    objeto_Trainers[`${data.nombre_trainer}`] = {};
    trainers.reset();
});
// Teléfono
let tel_trainer = {};
trainers.addEventListener('submit', (e)=>{
    e.preventDefault();
    let data =Object.fromEntries(new FormData(e.target));
    tel_trainer[`${data.telefono_trainer}`] = {};
    trainers.reset();
});
// Teams que maneja

//primer team
let select_team_trainer = {};
let team_1 = document.querySelector('#team_1');
let team_2 = document.querySelector('#team_2');
let team_3 = document.querySelector('#team_3');
let team_4 = document.querySelector('#team_4');

trainers.addEventListener("submit", (e)=> {
    if (e.target.value == 'team_1'){
        let data = Object.fromEntries(new FormData(e.target));
        objeto_Trainers[`${data.name_Sede}`] = [];
    } else if (e.target.value == 'camper'){
    }
    trainers.reset();
});


//segundo team
// let team_1_2 = document.querySelector('#team_1_2');
// let team_2_2 = document.querySelector('#team_2_2');
// let team_3_2 = document.querySelector('#team_3_2');
// let team_4_2 = document.querySelector('#team_4_2');
// let team_trainer_2 = {};

// trainer_camper.addEventListener("change", (e)=> {
//     if (e.target.value == 'trainer'){
//         section_Trainers.removeAttribute('class');
//     } else if (e.target.value == 'camper'){
//         section_Campers.removeAttribute('class');
//     }
//     trainer_camper.reset();
// });

