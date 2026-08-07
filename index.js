import {songLibrary} from './library.js';
function totalSongs(songLibrary) {
    let songs = 0; 
    
    for (let object of songLibrary) { 
        songs += object.songsArray.length;
    }
    
    return songs;
}

document.getElementById("pickfrom").textContent = (`Pick from ${totalSongs(songLibrary)} songs in ${songLibrary.length} albums!`);

var button = document.getElementById("button");

function pickSong(songLibrary){
    var album_obj = songLibrary[Math.floor(Math.random() * songLibrary.length)];
    var album = album_obj.album;
    var song = album_obj.songsArray[Math.floor(Math.random() * album_obj.songsArray.length)];
    if (song === album) {
        album += " - Single";
    }
    return {song: song, album: album};
}
button.addEventListener("click", function() {
    handleClick(songLibrary);
});

function handleClick(songLibrary) {
    var choice = pickSong(songLibrary);
    document.getElementById("song").textContent = choice.song;
    document.getElementById("album").textContent = choice.album;
    console.log(choice);
    processURL(choice);
    
    function processURL(choice) {
        let processedSong = choice.song.replace(/[-\/:',()[\] ]/g, '-').replace(/-+/g, '-').replace(/^-+|-+$/g, '').toLowerCase();
        switch (processedSong) {
            case "all-glory-be-to-christ":
                processedSong += "-8aeb1bd6-6af8-4a8c-90e7-b8dfe768eec3";
                break;
            case "there-s-a-river":
                processedSong += "-31a29457-cb2c-4538-a81b-d70431d5bac0";
                break;
            case "forever-we-sing-hallelujah":
                processedSong = "forever-we-sing-halleluia";
                break;
            case "heart-of-god":
                processedSong += "-7a2a9346-717e-4ea1-88bc-7929bb275c74";
                break;
            }
            if (choice.song === "Angels We Have Heard On High" && choice.album === "We Sing To You, Jesus (Carols For Worship)") {
                processedSong =+ "-1bc7c9c0-6aa7-4ca5-b0c2-ce235d4082be";
                }
            var url = `https://app.theworshipinitiative.com/songs/${processedSong}/instrument/tutorials#song`;
        document.querySelector("a").setAttribute("href", url);
    }
}
