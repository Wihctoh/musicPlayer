const audio = document.querySelector("audio");
const playPauseBtn = document.querySelector(".songControll__playPauseBtn");
const favBtn = document.querySelector(".songControll__favBtn");
const spotifyBtn = document.querySelector(".songHeader__spotifyBtn");

let flag = false;
let flagVolume = true;
let currentIndexSong = 0;
let currentTimeSong = 0;

// ---------------------songList------------------------------
const songs = [
  {
    id: 1,
    path: "./music/Bullet-for-my-Valentine_Tears-Dont-Fall.mp3",
    artist: "Bullet for my Valentine",
    songName: "Tears Dont Fall",
    imgPath: "background-image: url(./assets/bfmvCover.jpg)",
    duration: "05:48",
    liked: false,
  },
  {
    id: 2,
    path: "./music/Bring-Me-The-Horizon_Parasite-Eve.mp3",
    artist: "Bring Me The Horizon",
    songName: "Parasite Eve",
    imgPath: "background-image: url(./assets/bmthCover.jpg)",
    duration: "04:51",
    liked: false,
  },
  {
    id: 3,
    path: "./music/System-of-a-Down_Chop-Suey!.mp3",
    artist: "System of a Down",
    songName: "Chop Suey!",
    imgPath: "background-image: url(./assets/soadCover.jpg)",
    duration: "03:30",
    liked: false,
  },
];
// ---------------------volume controll------------------------------
document
  .querySelector(".songControll__volumeBtn")
  .addEventListener("click", function () {
    if (flagVolume) {
      this.style = "background-image: url(./assets/volumeOffBtn.svg);";
      audio.volume = 0;
      flagVolume = false;
    } else {
      this.style = "background-image: url(./assets/volumeHightBtn.svg);";
      audio.volume = 1;
      flagVolume = true;
    }
  });
// ---------------------song informations------------------------------
function songInfo() {
  const currentSong = songs[currentIndexSong];

  audio.src = currentSong.path;
  document.querySelector(".songHeader__title").innerHTML = currentSong.artist;
  document.querySelector(".songHeader__name").innerHTML = currentSong.songName;
  document.querySelector(".songImg").style = currentSong.imgPath;

  favBtn.style = currentSong.liked
    ? "background-image: url(./assets/favBtnUsed.svg)"
    : "background-image: url(./assets/favBtn.svg)";

  spotifyBtn.style = flag
    ? "background-image: url(./assets/spotifyBtn.svg);"
    : "background-image: url(./assets/spotifyBtnActive.svg);";
}
// ---------------------repeatSingle/randomRepeat button------------------------------
document
  .querySelector(".songControll__repeatBtn")
  .addEventListener("click", function () {
    this.style = "background-image: url(./assets/repeatSinglBtn.svg);";
  });
// ---------------------favorite button------------------------------
favBtn.addEventListener("click", function () {
  if (!songs[currentIndexSong].liked) {
    favBtn.style = "background-image: url(./assets/favBtnUsed.svg)";
    songs[currentIndexSong].liked = true;
  } else if (songs[currentIndexSong].liked) {
    favBtn.style = "background-image: url(./assets/favBtn.svg)";
    songs[currentIndexSong].liked = false;
  }
});
// ---------------------play/pause button------------------------------
playPauseBtn.addEventListener("click", function () {
  songInfo();

  if (!flag) {
    audio.play();

    audio.currentTime = currentTimeSong;
    flag = true;
    this.style = "background-image: url(./assets/pauseBtn.svg);";
  } else {
    audio.pause();

    audio.currentTime = currentTimeSong;
    flag = false;
    this.style = "background-image: url(./assets/playBtn.svg);";
  }
});
// ---------------------prev song button------------------------------
document
  .querySelector(".songControll__prevBtn")
  .addEventListener("click", function () {
    currentIndexSong--;

    if (currentIndexSong < 0) currentIndexSong = songs.length - 1;

    songInfo();
    audio.play();

    playPauseBtn.style = "background-image: url(./assets/pauseBtn.svg);";
    spotifyBtn.style = "background-image: url(./assets/spotifyBtnActive.svg);";

    flag = true;
  });
// ---------------------next song button------------------------------
document
  .querySelector(".songControll__nextBtn")
  .addEventListener("click", function () {
    currentIndexSong++;

    if (currentIndexSong > songs.length - 1) currentIndexSong = 0;

    songInfo();
    audio.play();

    playPauseBtn.style = "background-image: url(./assets/pauseBtn.svg);";
    spotifyBtn.style = "background-image: url(./assets/spotifyBtnActive.svg);";

    flag = true;
  });
// ---------------------song timer------------------------------
audio.addEventListener("timeupdate", function () {
  const progress = document.querySelector(".progressBar__progress");
  const progressBall = document.querySelector(".progressBar__progress-ball");
  const { duration, currentTime } = this;

  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  progressBall.style = `padding-left:${progressPercent}`;

  const timeMin = Math.trunc(currentTime / 60);
  const timeSec = Math.trunc(currentTime % 60);

  const min = timeMin < 10 ? `0${timeMin}` : `${timeMin}`;
  const sec = timeSec < 10 ? `0${timeSec}` : `${timeSec}`;
  document.querySelector(".progressBar__time").innerHTML = `${min}:${sec}`;

  currentTimeSong = currentTime;
});
// ---------------------song rewind------------------------------
document
  .querySelector(".progressBar__line")
  .addEventListener("click", function (event) {
    const width = this.clientWidth;
    const clickPlace = event.offsetX;

    audio.currentTime = (clickPlace / width) * audio.duration;
  });
