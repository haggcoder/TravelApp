require('jest-fetch-mock').enableMocks();
import { getCurrentWeather, getImageURL } from '../client/js/app'

describe("Test weatherbit API call", ()=>{
    beforeEach(() => {
        fetch.resetMocks()
    });
    it('Returns temperature & weather data', async () => {
        const lat = 28.7041;
        const lng = 77.1025;
        fetch.mockResponseOnce(JSON.stringify(
            {  
                "data":[  
                   {  
                      "weather":{  
                         "description":"Broken clouds"
                      },
                      "temp":27.1,
                   }
                ],
            }
        ));
        getCurrentWeather(lat, lng).then( res => {
            expect(res.temprature).toEqual(27.1);
        });
    });
});


describe("Test Pixabay API call", ()=>{
    beforeEach(() => {
        fetch.resetMocks()
    });
    it('Returns image URL', async () => {
        const country = 'India';
        const city = 'Delhi';
        fetch.mockResponseOnce(JSON.stringify(
            {
                "hits": [
                    {
                        "largeImageURL": "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
                    }
                ]
            }
        ));
        getImageURL(city, country).then( res => {
            expect(res).toEqual("https://pixabay.com/get/ed6a99fd0a76647_1280.jpg");
        });
    });
});