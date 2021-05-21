let entradas = document.getElementById("entradas")
let sushi = document.getElementById("sushi")
let arroz = document.getElementById("arroz")
let combos = document.getElementById("combos")
let adiciones = document.getElementById("adiciones")
let acompanamientos = document.getElementById("acompanamientos")
let postres = document.getElementById("postres")
let ramen = document.getElementById("ramen")
let bebidas = document.getElementById("bebidas")
let topButton = document.getElementById("top-button")




let arrozPrecios = document.getElementById("arroz-precios")
let pasta = document.getElementById("pasta")
let pastaPrecios = document.getElementById("pasta-precios")
let ramenPrecios = document.getElementById("ramen-precios")

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
                    <h3 class="item-title">${data[i].Producto}</h3>
                    <p class="item-description">${data[i].Descripcion}</p>
                    <p class="item-price">${"$" + " " + new Intl.NumberFormat('de-DE').format(data[i].Precio)}</p>
                </div>
                `
                break
            case 'Sushi':
                sushi.innerHTML += `
                <div class="card-item">
                    <h3 class="item-title">${data[i].Producto}</h3>
                    <p class="item-description">${data[i].Descripcion}</p>
                    <p class="item-price">${"$" + " " + new Intl.NumberFormat('de-DE').format(data[i].Precio)}</p>
                </div>    
                `
                break
            case 'Combos':
                combos.innerHTML += `
                <div class="card-item">
                    <h3 class="item-title">${data[i].Producto}</h3>
                    <p class="item-price">${"$" + " " + new Intl.NumberFormat('de-DE').format(data[i].Precio)}</p>
                </div>    
                `
            break
            case 'Adiciones':
                adiciones.innerHTML += `
                <div class="card-item">
                    <h3 class="item-title">${data[i].Producto}</h3>
                    <p class="item-price">${"$" + " " + new Intl.NumberFormat('de-DE').format(data[i].Precio)}</p>
                </div>    
                `
            break
            case 'Acompañamientos':
                acompanamientos.innerHTML += `
                <div class="card-item">
                    <h3 class="item-title">${data[i].Producto}</h3>
                    <p class="item-price">${"$" + " " + new Intl.NumberFormat('de-DE').format(data[i].Precio)}</p>
                </div>    
                `
            break
            case 'Postres':
                postres.innerHTML += `
                <div class="card-item">
                    <h3 class="item-title">${data[i].Producto}</h3>
                    <p class="item-price">${"$" + " " + new Intl.NumberFormat('de-DE').format(data[i].Precio)}</p>
                </div>    
                `
            break
            case 'Bebidas':
                bebidas.innerHTML += `
                <div class="card-item">
                    <h3 class="item-title">${data[i].Producto}</h3>
                    <p class="item-price">${"$" + " " + data[i].Precio}</p>
                </div>    
                `
            break
        }


        switch (data[i].Producto) {
            case 'Arroz Yakimeshi':
                if(i = 3) {
                arroz.innerHTML += `
                <div class="card-item">
                    <h3 class="item-title">${data[3].Producto}</h3>
                    <p class="item-description">${data[3].Descripcion}</p>
                </div>    
                `
                for (let j = 0; j < 4; j++) {
                        const personal = data[3].Personal[j];
                        const familiar = data[3].Familiar[j];
                        arrozPrecios.innerHTML += `
                        <tr>
                            <th>${personal.Proteina}</th>
                            <td>${personal.Precio}</td>
                            <td>${familiar.Precio}</td>
                        </tr>   
                    `
                    }
                }
                if(i = 4) {
                    pasta.innerHTML += `
                    <div class="card-item">
                        <h3 class="item-title">${data[4].Producto}</h3>
                        <p class="item-description">${data[4].Descripcion}</p>
                    </div>    
                `
                for (let j = 0; j < 4; j++) {
                    const personal = data[4].Personal[j];
                    const familiar = data[4].Familiar[j];
                    pastaPrecios.innerHTML += `
                    <tr>
                        <th>${personal.Proteina}</th>
                        <td>${personal.Precio}</td>
                        <td>${familiar.Precio}</td>
                    </tr>   
                `
                }
                }
            break
            case 'Ramen Soyu - Sopa de fideos japonesa':
                if(i = 42) {
                    ramen.innerHTML += `
                    <div class="card-item">
                        <h3 class="item-title">${data[42].Producto}</h3>
                        <p class="item-description">${data[42].Descripcion}</p>
                    </div>    
                    `}
                    for (let j = 0; j < data.length; j++) {
                        const personal = data[42].Personal[j];
                        ramenPrecios.innerHTML += `
                        <tr>
                            <th>${personal.Proteina}</th>
                            <td>${personal.Precio}</td>
                        </tr>   
                    `
                    }
                    console.log(data[42].Personal[1])
            break
        }
        i++
    }
})

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }