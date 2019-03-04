// QUESTION 2
// FETCH DATA

var url = 'https://api-v3.mbta.com/vehicles?api_key=b931eb2686024e9a8efca565d7c894e1&filter[route]=1&include=trip';
var data = [];
var count = 0;
function getData(){
    fetch(url)
        .then(response => response.json())
        .then(json => {
            data = json.data;
            console.log(data);
            if(count == 0){
                mapInit();
                markersInit();
                count = 1;
            }
            if(count == 1){
                markersMove();
            }
            setTimeout(getData, 15000);
        })
};