console.log("Welcome to Spotify");

//Initialize the variable

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "Salam-e_Ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Salam-e_Ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Salam-e_Ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Salam-e_Ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Salam-e_Ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Salam-e_Ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Salam-e_Ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Salam-e_Ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Salam-e_Ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},


]

//audioElement.play()
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})

//listen to events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

})
