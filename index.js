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
    return {song: song, album: album, [Symbol.toStringTag]: "Song Choice"};
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
        let processedSong = choice.song.replace(/[\/:',()[\]\-. ]/g, '-').replace(/-+/g, '-').replace(/-+$/g, '');.toLowerCase();
        switch (processedSong) {
            case "forever-we-sing-hallelujah":
                processedSong = "forever-we-sing-halleluia";
                break;
            case "when-the-stars-burn-down":
                processedSong += "-blessing-and-honor";
                break;
            }
            if (choice.song === "Angels We Have Heard On High" && choice.album === "We Sing To You, Jesus (Carols For Worship)") {
                processedSong += "-we-sing-to-you-jesus";
                }
            if (choice.song === "How Great Thou Art" && choice.album === "The Worship Initiative Hymns Volume 2") {
                processedSong += "-twi-hymns-2";
            }
            if (choice.song === "All Hail King Jesus" && choice.album === "The Worship Initiative Volume 18") {
                processedSong += "-vol-18";
            }
            if (choice.song === "O Holy Night" && choice.album === "We Sing to You, Jesus (Carols for Worship)") {
                processedSong += "-we-sing-to-you-jesus";
            }
        
            var url = `https://psallo.theworshipinitiative.com/home/songs/${processedSong}/chords`;
        document.querySelector("a").setAttribute("href", url);
    }
}
