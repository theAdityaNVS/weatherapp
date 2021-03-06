var notfoundtag=document.querySelector('.notfound');
const placetage=document.querySelector('.place');
let badge1 = document.querySelector('.b1');

class Weather{
    constructor(){}
async  getcity(city)
{
    console.log(city);
    const link='https://dataservice.accuweather.com/locations/v1/cities/search';
    const key='Ot5sL8vPFxkxv7Zm9fhLW58j7G0K9Rwi';
    const query=`?apikey=${key}&q=${city}`;
    const response =await fetch(link+query)
    .catch((err)=>{
        placetage.style.fontSize ="100%"
        placetage.textContent ="Sorry,The requests to the api was over";
    })
    ;
    const data =await response.json()
    return data[0];
}
async  getWeather(citycode)
{
    console.log(citycode);
    const link2='https://dataservice.accuweather.com/currentconditions/v1/';
    const key2='Ot5sL8vPFxkxv7Zm9fhLW58j7G0K9Rwi';
    const query=`${citycode}?apikey=${key2}`;
    const response=await fetch(link2+query)
    .catch((err)=>{
        placetage.style.fontSize ="100%"
        placetage.textContent ="Sorry,The requests to the api was over";
    });
    const data=await response.json();
   return data;
}
async updateCity(city1){
    const citydata=await this.getcity(city1);
    console.log(citydata);
    if(citydata == undefined){
        placetage.style.fontSize ="100%"
        placetage.textContent ="Sorry,We are unable to find the city";
    }
    const weatherdata=await this.getWeather(citydata.Key);
    console.log(weatherdata);
    
    return {citydata,weatherdata};
}
}

let darkSwitch = document.querySelector('.switchBtn');

// For Dark Mode
darkSwitch.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    badge1.classList.toggle('dark-mode-img');
    // badge2.classList.toggle('dark-mode-img');
    // badge3.classList.toggle('dark-mode-img');
    // badge4.classList.toggle('dark-mode-img');
});