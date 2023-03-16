let formulario_sedes = document.querySelector("#formulario_sedes");
// formulario_sedes.style.color = "red"
let trai_ner = document.querySelector("#trainer");


let sedes = {};


formulario_sedes.addEventListener("submit", (e)=>{
    e.preventDefault(); // No olvidar agregarle los paréntesis() // detiene el evento del formulario, y pasa toda la info al js
    let data = Object.fromEntries(new FormData(e.target));// Objet.fromEntries(new FormData(e.target)) --> "Toma a todos los input's que
    // tengan el atributo 'name' como variables, y para el dato..."
    // {
    //     // for (let [val, id] of Object.entries(campus)){
    //     //     console.log(val);
    //     //     console.log(id);
    //     //     console.log(data.name_Sede)
    //     //     if (val == data.name_Sede) {
    //     //         alert("La sede ya ha sido agregada. ")
    //     //     } else {
    //     //     }
    //     // };
    // }
    campus[`${data.name_Sede}`] = {}; // El 'name_Sede' es el name del input
    formulario_sedes.reset();
});


let trainer_camper = document.querySelector('#trainer_camper');
trainer_camper.addEventListener("change", (e)=> {
    if (e.target.value == 'trainer'){
        trai_ner.removeAttribute('style');
    }
    trainer_camper.reset();
});
