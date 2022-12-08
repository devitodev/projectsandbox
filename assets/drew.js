// How to open the modal
$(document).ready(function (){
    $('#jokebox').modal()
})

// $(document).ready(function(){
//     $('#dogebox').modal();
//   });


  function getaJoke() {
        var jokeAPI = 'https://official-joke-api.appspot.com/random_joke'
        fetch(jokeAPI)
        .then(function (response){
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            renderJoke(data);
        });
    }



function renderJoke(data) {
   
    var grabSetup = document.querySelector('#setup');
    var setupLocation = data.setup;
   grabSetup.innerHTML = setupLocation;
    
    var grabPunchline = document.querySelector('#punchline');
    var punclineLocation = data.punchline;
    grabPunchline.innerHTML = punclineLocation;
    
    console.log()
    
}

var jokeBtn = document.getElementById('joke-btn')


jokeBtn.addEventListener('click', getaJoke)


// function chooseNextJoke() {
//     for(i = 0; i < data.length; i++) {
        
//     }
// }


// refresh button function
// var getRefreshBtn = $('#refresh-btn')
// getRefreshBtn.click(function() {
//     location.reload();
// });

// function getaDoge () {
//     var dogeAPI = 'http://shibe.online/api/shibes?count=[1-100]&urls=true&httpsUrls=true'
//     fetch(dogeAPI)
//     .then(function (response){
//         return response.json()
//     })
//     .then(function (data2) {
//         console.log(data2)
//         renderDoge(data2)
//     });
// }

// getaDoge()

// function renderDoge (data2) {
//     $('#dogetime').attr('src', data2[0])
// }



// Grabbing the inside value of the div (hopefully)
// var relatedArtistSpot = $('#artist-spot').val();
// var coldplay = '4gzpq5DPGxSnKTe4SA8HAU'






// Failed attempt at: Function to pull related artists API from Spoftify (hopefully again)
// function getRelatedArtists() {
//     var relatedArtists = `https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/related-artists`
//     fetch(relatedArtists)
//     .then(function (response){
//         return response.json()
//     })
//     .then(function (data) {
        
//     });
// }
 
// getRelatedArtists()