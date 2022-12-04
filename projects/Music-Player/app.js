const songsAray = [

    {pathId : "file/songs/Alan Walker, Sabrina Carpenter & Farruko  - On My Way.mp3",name : "Alan Walker, Sabrina Carpenter & Farruko  - On My Way"},

    {pathId : "file/songs/Charlie Puth - One Call Away [Official Video].mp3",name : "Charlie Puth - One Call Away "},

    {pathId : "file/songs/Chord Overstreet - Hold On (Lyrics).mp3",name : "Chord Overstreet - Hold On"},

    {pathId : "file/songs/Glass Animals - Heat Waves (Lyrics).mp3",name : "Glass Animals - Heat Waves"},

    {pathId : "file/songs/Lil Nas X - Old Town Road (Lyrics) ft. Billy Ray Cyrus.mp3",name : "Lil Nas X - Old Town Road ft. Billy Ray Cyrus"},

    {pathId : "file/songs/One Direction - Night Changes.mp3",name : "One Direction - Night Changes"},

    {pathId : "file/songs/Shawn Mendes, Camila Cabello - Señorita (Official Music Video).mp3",name : "Shawn Mendes, Camila Cabello - Señorita"},

    {pathId : "file/songs/Sia - Never Give Up (Lyrics).mp3",name : "Sia - Never Give Up"},
    {pathId  : "file/songs/Sia - Unstoppable .mp3", name : "Sia - Unstoppable "},

    {pathId : "file/songs/song1.mp3",name : "Ed Sheeran - Perfect"},
    {pathId : "file/songs/song2.mp3",name : "Justi Bebier - Ghost"},
    

    {pathId : "file/songs/The Script - Hall Of Fame (Lyrics).mp3",name : "The script -  Hall of fame"},

    {pathId : "file/songs/Unity (Acoustic) - Alan x Walkers _ Sapphire.mp3",name : "Unity (Acoustic) - Alan x Walkers _ Sapphire"},
    {pathId : "file/songs/Vietsub+Lyrics I Do - 911.mp3",name : "Vietsub+Lyrics I Do - 911"},
]

const songs_list_container=document.querySelector('.songs-list-container');
const audioRange = document.querySelector('.audioRange');
const audio = document.querySelector('.audio');
const songRange = document.querySelector('.songRange');
const forward=document.querySelector('.fa-forward-step');
const backward=document.querySelector('.fa-backward-step');
const songCurrentTimeEl = document.querySelector('.songCurrentTime');
const songDurationEl = document.querySelector('.songDuration')

const play = document.querySelector('.fa-circle-play');
const pause = document.querySelector('.fa-circle-pause');

const currentSongName = document.querySelector('.currentSongName');

let musicPlayingIndex = 0;
let isPlaying =false;

for(let i = 0 ;i<songsAray.length ; i++){

    const songDiv = document.createElement('div');
    songDiv.textContent =(i + 1).toString()+ ". " + songsAray[i].name;
    songDiv.classList.add("songName");
    songs_list_container.append(songDiv);

    songDiv.addEventListener('click',() => {
        musicPlayingIndex = i
        songPlaying(musicPlayingIndex)
        isPlaying =true ;
        updatePlayAndPause();
    })
}
const songDurationAndCurrent = (time) => {
    const minute=Math.floor(time / 60);
    const second = Math.floor(time % 60);
    const minuteText = minute < 10 ? "0"+minute.toString() : minute ;
    const secondText = second < 10 ? "0"+second.toString() : second;
    return minuteText + ":" + secondText;
}
audio.addEventListener('loadeddata',() => {
    songDurationEl.textContent = songDurationAndCurrent(audio.duration)
})

audio.addEventListener('timeupdate',() => {
    songCurrentTimeEl.textContent = songDurationAndCurrent(audio.currentTime);

    const songDuration = Math.floor(audio.duration);
    const songCurrentTime = Math.floor(audio.currentTime)
    let progressRange=( songRange.max/ songDuration) *songCurrentTime;
    songRange.value = progressRange;  
    
});

audio.addEventListener('ended',() => {
    musicPlayingIndex ++;
    songPlaying(musicPlayingIndex);
    
})

songRange.addEventListener('change',() => {
    let changeSongDuration= (songRange.value / songRange.max) * audio.duration;
    audio.currentTime = changeSongDuration;
    
})

audioRange.addEventListener('change',() => {
    audio.volume=audioRange.value / audioRange.max
    
})

forward.addEventListener('click',() => {
    musicPlayingIndex ++;
    if(musicPlayingIndex > songsAray.length -1){
        musicPlayingIndex = 0;
    }
    isPlaying = true;
    updatePlayAndPause();
    songPlaying(musicPlayingIndex);
})

backward.addEventListener('click',() => {
    musicPlayingIndex -- ;
    console.log("backward => ",musicPlayingIndex);
    if(musicPlayingIndex === -1){
        musicPlayingIndex = songsAray.length -1;
    }
    isPlaying = true;
    updatePlayAndPause();
    songPlaying(musicPlayingIndex);
    
})

play.addEventListener('click', () => {
    const songTime = audio.currentTime;
    if(songTime === 0){
        
        isPlaying = true;
        updatePlayAndPause();
        songPlaying(musicPlayingIndex);  

    }else{
        isPlaying = true;
        updatePlayAndPause();
        audio.play();
    }
    

})
pause.addEventListener('click',() => {
    isPlaying = false
    updatePlayAndPause();
    audio.pause();
})

const songPlaying = (index) => {
    audio.src = songsAray[index].pathId;
    currentSongName.textContent = songsAray[musicPlayingIndex].name;
    audio.play();
}
const updatePlayAndPause = () => {
    if(isPlaying){
        play.style.display = "none";
        pause.style.display = "inline"

    }else{
        play.style.display = "inline";
        pause.style.display = "none"
    }
}

