//all DOM manipulation

const cityform = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

/*update UI will be responsible for taking input data
and output in it to the browser using cityform,card,details*/
const updateUI = (data) => {
    /* const cityDets = data.cityDets;//local var
     const weather = data.weather;//local var*/
    //destructure properties
    //from data object storing cityDets & weather property to const cityDets & weather
    const {cityDets, weather} = data;
    //update details template
    details.innerHTML = `<h5 class="my-3">${cityDets.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>`;
    //update night/day & icon images
    const iconsrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconsrc);

    let timesrc = null;
    if (weather.IsDayTime) {
        timesrc = 'img/day.svg';
    } else {
        timesrc = 'img/night.svg';
    }
    time.setAttribute('src', timesrc);
    //removing d-none
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
};

// form update city with every time input value
const updatecity = async (cityvalue) => {
    const cityDets = await getcity(cityvalue);
    const weather = await getweather(cityDets.Key);
    return {cityDets, weather};
};
cityform.addEventListener('submit', e => {
    e.preventDefault();
    const cityvalue = cityform.city.value.trim(); //trim to avoid whitespace
    cityform.reset(); //clear out form field
    //update UI with new city
    updatecity(cityvalue).then(data => {
        //console.log(data);
        updateUI(data);
    }).catch(err => {
        console.log(err);
    });

    //set local storage
    localStorage.setItem('city',cityvalue);
});
if (localStorage.getItem('city'))
{
    updatecity(localStorage.getItem('city'))
        .then(data=>{
            updateUI(data);
        }).catch(err=>
    {
        console.log(err);
    })
}