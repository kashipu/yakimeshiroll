let entradas = document.getElementById("entradas")
let sushi = document.getElementById("sushi")
let arroz = document.getElementById("arroz")
let arrozPrecios = document.getElementById("arroz-precios")
let pasta = document.getElementById("pasta")
let pastaPrecios = document.getElementById("pasta-precios")

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
                    <h3>${data[i].Producto}</h3>
                    <p>${data[i].Descripcion}</p>
                    <p>${data[i].Precio}</p>
                </div>
                `
                break
            case 'Sushi':
                sushi.innerHTML += `
                <div class="card-item">
                    <h3>${data[i].Producto}</h3>
                    <p>${data[i].Descripcion}</p>
                    <p>${data[i].Precio}</p>
                </div>    
                `
                break
        }


        switch (data[i].Producto) {
            case 'Arroz Yakimeshi':
                if(i = 3) {
                arroz.innerHTML += `
                <div class="card-item">
                    <h3>${data[3].Producto}</h3>
                    <p>${data[3].Descripcion}</p>
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
                        <h3>${data[4].Producto}</h3>
                        <p>${data[4].Descripcion}</p>
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
        }
        i++
    }
})

