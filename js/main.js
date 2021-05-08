let entradas = document.getElementById("entradas")
let fuertes = document.getElementById("fuertes")
let sushi = document.getElementById("sushi")

fetch("../js/entradas.json")
.then(res => res.json())
.then(data => {
    let i = 0
    let length = data.length
    while (i < length) {
        switch (data[i].Categoria) {
            case 'Entradas':
                entradas.innerHTML += `
                <div class="card-item">
                    <h2>${data[i].Producto}</h2>
                    <p>${data[i].Descripcion}</p>
                    <p>${data[i].Precio}</p>
                </div>
                `
                break
            case 'Fuertes':
                fuertes.innerHTML += `
                <div class="card-item">
                    <h2>${data[i].Producto}</h2>
                    <p>${data[i].Descripcion}</p>
                    <p>${data[i].Precio}</p>
                </div>
                `
                break
            case 'Sushi':
                sushi.innerHTML += `
                <div class="card-item">
                    <h2>${data[i].Producto}</h2>
                    <p>${data[i].Descripcion}</p>
                    <p>${data[i].Precio}</p>
                </div>    
                `
        }
        i++
    }
})

