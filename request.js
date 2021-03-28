const key = '7fd287d36129673864fce58bf9d81714';

// const baseURL = 'http://api.lopenweathermap.org/data/2.5/weather?q=Lagos&appid=7fd287d36129673864fce58bf9d81714';

// fetch(baseURL)
//     .then((data) => { console.log('response', data.json()) })
//     .catch((error) => {
//         console.log(error);
//     });

const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    return data;

}
