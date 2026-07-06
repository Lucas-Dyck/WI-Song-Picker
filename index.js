import {songLibrary} from './library.js';
function totalSongs(songLibrary){
    var songs = 0;
    for (let i=0; i < songLibrary.length; i++){
        songs += songLibrary[i].songsArray.length;
    }
    return songs;
}

document.getElementById("pickfrom").textContent = (`Pick from ${totalSongs(songLibrary)} songs in ${songLibrary.length} albums!`);

var button = document.getElementById("button");

function choice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function pickSong(songLibrary){
    var album_obj = choice(songLibrary);
    var album = album_obj.album;
    var song = choice(album_obj.songsArray);
    if (song === album) {
        album += " - Single";
    }
    var outputObject = {"song": song, "album": album}
    
    return outputObject;
}

button.addEventListener("click", function() {
    handleClick(songLibrary);
});

function handleClick(songLibrary) {
    var albumChoice = pickSong(songLibrary);
    document.getElementById("song").textContent = albumChoice.song;
    document.getElementById("album").textContent = albumChoice.album;
    setTimeout(function(){button.classList.remove("clicked")}, 200);
    processURL(albumChoice.song);
} 

function processURL(song) {
    let processedSong = song
      .replace(/[-\/:',()[\] ]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '')
      .toLowerCase();
    if (processedSong === "all-glory-be-to-christ") {
        processedSong += "-8aeb1bd6-6af8-4a8c-90e7-b8dfe768eec3";
    }
    var url = `https://app.theworshipinitiative.com/songs/${processedSong}/instrument/chart`;
    document.querySelector("a").setAttribute("href", url);
}
