const music = new Audio('./images/National-Anthem-Of-France.mp3')
music.loop = true;
music.autoplay = false;
let musicPlaying = false;


const musicSwitcher = document.getElementById('music_switcher')


musicSwitcher.addEventListener('click' , (e) => {
  e.preventDefault()
  refreshMusicState()
});

document.addEventListener('keypress' , (e) => {
  e.preventDefault()
  console.log(e)
  if(e.code == 'Space') {
    refreshMusicState()
  }
});
const refreshMusicState = () => {
  if(musicPlaying){
    music.pause();
    musicPlaying = false;
    musicSwitcher.classList.remove('fa-pause')
    musicSwitcher.classList.add('fa-play')
  }else{
    music.play()
    musicPlaying = true
    musicSwitcher.classList.remove('fa-play')
    musicSwitcher.classList.add('fa-pause')
  }
};