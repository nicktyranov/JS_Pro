console.log('DZ-11');

//Домашнее задание - Event Loop
/*
Сделайте функцию получения координат пользователя, используя 
Geolocation API, но преобразовав его в Promise. 

navigator.geolocation.getCurrentPosition(function (position) {
  do_something(position.coords.latitude, position.coords.longitude);
});
*/
function getGeo() {
    let hasGeo = false;
    let hasGeoPermission = false;
    
    navigator.permissions.query({ name: 'geolocation' })
        .then((data) => {
            console.log(data.state)
            if (data.state == 'granted') {
                hasGeoPermission = true;
            }
            console.log(hasGeoPermission);
        });

    if ('geolocation' in navigator) {
        hasGeo = true;

        return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                resolve(geoToConsol(position.coords.latitude, position.coords.longitude));
            },
            function (error) {
                reject(error);
            }
        );
        });
        
    } else {
        return 'your device does not support it'
    }
};

function geoToConsol(lat, lon) {
    console.log(lat, lon);
    return {lat, lon}
}

getGeo().then((data) => console.log(data))