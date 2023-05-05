const audio = document.querySelector("audio");
const artist = document.querySelector(".songHeader__title");
const songName = document.querySelector(".songHeader__name");
const songCover = document.querySelector(".songImg");
const barTime = document.querySelector(".progressBar__time");
const playPauseBtn = document.querySelector(".songControll__playPauseBtn");
const prevBtn = document.querySelector(".songControll__prevBtn");
const nextBtn = document.querySelector(".songControll__nextBtn");
const favBtn = document.querySelector(".songControll__favBtn");

let flag = false;
let currentIndexSong = 0;

const songs = [
  {
    id: 1,
    path: "./music/Bullet-for-my-Valentine_Tears-Dont-Fall.mp3",
    artist: "Bullet for my Valentine",
    songName: "Tears Dont Fall",
    imgPath: "background-image: url(./assets/bfmvCover.jpg)",
    duration: "05:48",
    liked: "background-image: url(./assets/favBtnUsed.svg)",
  },
  {
    id: 2,
    path: "./music/Bring-Me-The-Horizon_Parasite-Eve.mp3",
    artist: "Bring Me The Horizon",
    songName: "Parasite Eve",
    imgPath: "background-image: url(./assets/bmthCover.jpg)",
    duration: "04:51",
    liked: "background-image: url(./assets/favBtnUsed.svg)",
  },
  {
    id: 3,
    path: "./music/System-of-a-Down_Chop-Suey!.mp3",
    artist: "System of a Down",
    songName: "Chop Suey!",
    imgPath: "background-image: url(./assets/soadCover.jpg)",
    duration: "03:30",
    liked: "background-image: url(./assets/favBtnUsed.svg)",
  },
];

function songInfo() {
  const currentSong = songs[currentIndexSong];

  audio.src = currentSong.path;
  artist.innerHTML = currentSong.artist;
  songName.innerHTML = currentSong.songName;
  songCover.style = currentSong.imgPath;
  barTime.innerHTML = currentSong.duration;
}

favBtn.addEventListener("click", function () {
  this.style = songs[currentIndexSong].liked;
});

playPauseBtn.addEventListener("click", function () {
  songInfo();

  if (!flag) {
    audio.play();
    this.style = "background-image: url(./assets/pauseBtn.svg);";
    flag = true;
  } else {
    flag = false;
    audio.pause();
    this.style = "background-image: url(./assets/playBtn.svg);";
  }
});

prevBtn.addEventListener("click", function () {
  if (currentIndexSong === 0) return;
  currentIndexSong--;
  songInfo(); 
  audio.play();
  playPauseBtn.style = "background-image: url(./assets/pauseBtn.svg);";
  flag = true;
});

nextBtn.addEventListener("click", function () {
  if (currentIndexSong === songs.length - 1) return;
  currentIndexSong++;
  songInfo();
  audio.play();
  playPauseBtn.style = "background-image: url(./assets/pauseBtn.svg);";
  flag = true;
});
