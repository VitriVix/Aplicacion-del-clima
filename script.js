let apiKey = '35853a107cfb70e5ff1fce6e5abc9cfc';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=';

document.getElementById('botonBusqueda').addEventListener('click', ()=> {
    const ciudad = document.getElementById('ciudadEntrada').value;
    if (ciudad) {
        obtenerData(ciudad);
        document.getElementById('ciudadEntrada').value = '';
    }
    else console.log('No pusiste una ciudad')
})


function obtenerData(ciudad) {
    fetch(`${url}${ciudad}&appid=${apiKey}`)
.then(response => response.json())
.then(response => mostrarDatosDeClima(response));
}

function mostrarDatosDeClima(data) {
    console.log(data)
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';
    const cityName = data.name;
    const temp = data.main.temp;
    const description = data.weather[0].description;

    const cityTitle = document.createElement('h2');
    cityTitle.textContent = cityName;

    const cityTemp = document.createElement('p');
    cityTemp.textContent = temp;
    
    const cityDescription = document.createElement('p');
    cityDescription.textContent = description;

    divDatosClima.appendChild(cityTitle);
    divDatosClima.appendChild(cityTemp);
    divDatosClima.appendChild(cityDescription)

    document.getElementById('ciudadEntrada').innerHTML = ''

}