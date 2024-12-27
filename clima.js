const contenedor = document.querySelector('.contenedor');
const search = document.querySelector('.search-box button');
const climabox = document.querySelector('.clima-box');
const climadetalles = document.querySelector('.clima-detalles');
const error = document.querySelector('.not-found');


search.addEventListener('click',() =>{
    const APIkey =  'f7153d46dd824c4544469db0c0966004';
    const city = document.querySelector('.search-box input').value;

    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`).then(response => response.json()).then(json => { 
        
       if(json.cod == '404'){
            contenedor.style.height = '400px';
            climabox.classList.remove('active');
            climadetalles.classList.remove('active');
            error.classList.add('active');
            return;
       }


            contenedor.style.height = '555px';
            climabox.classList.add('active');
            climadetalles.classList.add('active');
            error.classList.remove('active');


       
        const image = document.querySelector('.clima-box img');
        const temperatura = document.querySelector('.clima-box .temperatura');
        const descripcion = document.querySelector('.clima-box .descripcion');
        const humedad = document.querySelector('.clima-detalles .humedad span');
        const viento = document.querySelector('.clima-detalles .viento span');
    

       switch (json.weather[0].main) {
        case 'Clear':
            image.src = 'Public/img/dom.png';
            break;

        case 'Rain':
            image.src = 'Public/img/drizzle_13882372.png';
            break;  
            
        case 'Snow':
            image.src = 'Public/img/nieve.png';
            break;      
        
        case 'Clouds':
            image.src = 'Public/img/cloudy_3304654.png';
            break;  
         
        case 'Mist':
            image.src = 'Public/img/windy_6360889.png';
            break;  
            
        case 'Haze':
            image.src = 'Public/img/windy_6360889.png';
            break;      

       
        default:
            image.src ='Public/img/cloudy_3304654.png';
       }

       temperatura.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
       descripcion.innerHTML = `${json.weather[0].description}`;
       humedad.innerHTML = `${json.main.humidity}%`;
       viento.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

    });


});