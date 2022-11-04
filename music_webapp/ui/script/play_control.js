// handler for playing selected song

function play(id) {
    const song = document.getElementById(id).getAttribute('data-src');
   // alert(song);
    
    let audioController = document.getElementById('song');
    let song_title = document.getElementById('song-label');
    audioController.setAttribute('src', song);
    song_title.innerHTML = document.getElementById(id).getAttribute("data-title");
    //alert(song_title.innerHTML);
    //alert(document.getElementById('song').getAttribute('src'));
    let play_icon = document.getElementById(id);
    func = "pause(" + id + ");"
    play_icon.setAttribute("onclick", func);
    play_icon.setAttribute("src", "../img/pause.png");
    audioController.play();
}

function pause(id) {
    const audioController = document.getElementById('song');

    let play_icon = document.getElementById(id);
    func = "play(" + id + ");"
    play_icon.setAttribute("onclick",func);
    play_icon.setAttribute("src", "../img/play.png")
    audioController.pause();
}