// Recupera solo el primer botón que encuentra.
// const botonUnico = document.querySelector('.button-apply-job')
// console.log(botonUnico)

// if (botonUnico !== null) {
//     botonUnico.addEventListener('click', () => {
//         botonUnico.textContent = 'Aplicado!'
//         botonUnico.classList.add('is-applied')
//         botonUnico.disable = true
//     })
// }

// Recupera todos los botones que coinciden con la clase dada.

// Segunda forma de hacerlo:

// const boton = document.querySelectorAll('.button-apply-job')

// // Recorre el NodeList de botones y les añade un evento a cada uno.
// // Puede devolver una lista vacía si no encuentra ningún elemento que coincida con el selector.

// boton.forEach(boton => {
//     boton.addEventListener('click', () => {
//     boton.textContent = 'Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disable = true
// })
// })

const jobListingSection = document.querySelector('.job-listings')
console.log(jobListingSection)

jobListingSection?.addEventListener('click', function (event) { // Optional chaining, valida si el elemento existe, si es null, no se ejecuta nada a la derecha del ?
    const element = event.target

    if (element.classList.contains('button-apply-job')) {
        element.textContent = 'Aplicado!'
        element.classList.add('is-applied')
        element.disabled = true
    }
});

// Revisar mañana que esto se pueda realizar en un solo listener.

const resultSection = document.querySelector('.resultJob')

resultSection?.addEventListener('click', function (event) { // Optional chaining, valida si el elemento existe, si es null, no se ejecuta nada a la derecha del ?
    const element = event.target

    if (element.classList.contains('button-apply-job')) {
        element.textContent = 'Aplicado!'
        element.classList.add('is-applied')
        element.disabled = true
    }
});


const filterJob = document.querySelector('.search-filters')


filterJob?.addEventListener('change', function (event) {
    const element = event.target
    console.log(element.value)
    const jobListings = document.querySelectorAll('.job-listing')
    jobListings.forEach(job => {
        if (element.value === 'all') {
            job.classList.remove('hidden') 
            return
        }
        if (job.dataset.type === element.value) {
            job.classList.remove('hidden')
        } else {
            job.classList.add('hidden')
        }
    })
});
// Ejercicio 1: Crear la tercera pagina detalle de la oferta
// Ejercicio 2: Filtrar las ofertas por tipo de trabajo (remoto, tiempo completo, medio tiempo), Pista, escuchando el evento 'change' en un select








