const audio = document.querySelector("audio");
const artist = document.querySelector(".songHeader__title");
const songName = document.querySelector(".songHeader__name");
const songCover = document.querySelector(".songImg");
const barTime = document.querySelector(".progressBar__time");
const playPauseBtn = document.querySelector(".songControll__playPauseBtn");
const prevBtn = document.querySelector(".songControll__prevBtn");
const nextBtn = document.querySelector(".songControll__nextBtn");
const favBtn = document.querySelector(".songControll__favBtn");
const spotifyBtn = document.querySelector(".songHeader__spotifyBtn");
const repeatBtn = document.querySelector(".songControll__repeatBtn");

let flag = false;
let currentIndexSong = 0;

const songs = [
  {
    id: 1,
    path: "./music/Bullet-for-my-Valentine_Tears-Dont-Fall.mp3",
    artist: "Bullet for my Valentine",
    songName: "Tears Dont Fall",
    imgPath: "background-image: url(./assets/bfmvCover.jpg)",
    duration: "00:20",
    // duration: "05:48",
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

// function progressBar() {
//   const progress = document.querySelector(".progressBar__progress");
//   let minuts = 0;
//   let seconds = 0;
//   let count = 0;

//   let interval = setInterval(function () {
//     count++;
//     seconds++;

//     if (seconds >= "10") {
//       barTime.innerHTML = `0${minuts}:${seconds}`;
//     } else {
//       barTime.innerHTML = `0${minuts}:0${seconds}`;
//     }

//     if (seconds >= "60") {
//       minuts += 1;
//       seconds = 0;
//       barTime.innerHTML = `0${minuts}:0${seconds}`;
//     }

//     progress.style = `width: ${count}px`;
//   }, 1000);
// }

function songInfo() {
  const currentSong = songs[currentIndexSong];

  audio.src = currentSong.path;
  artist.innerHTML = currentSong.artist;
  songName.innerHTML = currentSong.songName;
  songCover.style = currentSong.imgPath;
  barTime.innerHTML = currentSong.duration;

  if (currentSong.liked) {
    favBtn.style = "background-image: url(./assets/favBtnUsed.svg)";
  } else if (!currentSong.liked) {
    favBtn.style = "background-image: url(./assets/favBtn.svg)";
  }
}

function spotifyActive() {
  if (!flag) {
    spotifyBtn.style = "background-image: url(./assets/spotifyBtnActive.svg);";
  } else if (flag)
    spotifyBtn.style = "background-image: url(./assets/spotifyBtn.svg);";
}

repeatBtn.addEventListener("click", function () {
  let style = getComputedStyle(repeatBtn).transform;

  if (style === "none") {
    this.style = "transition: 2s; transform: rotate(360deg)";
  } else {
    this.style.removeProperty("transition");
    this.style.removeProperty("transform");
  }
});

favBtn.addEventListener("click", function () {
  if (!songs[currentIndexSong].liked) {
    favBtn.style = "background-image: url(./assets/favBtnUsed.svg)";
    songs[currentIndexSong].liked = true;
  } else if (songs[currentIndexSong].liked) {
    favBtn.style = "background-image: url(./assets/favBtn.svg)";
    songs[currentIndexSong].liked = false;
  }
});

playPauseBtn.addEventListener("click", function () {
  songInfo();

  if (!flag) {
    spotifyActive();
    audio.play();
    // progressBar();

    this.style = "background-image: url(./assets/pauseBtn.svg);";
    flag = true;
  } else {
    spotifyActive();
    audio.pause();

    flag = false;
    this.style = "background-image: url(./assets/playBtn.svg);";
  }
});

prevBtn.addEventListener("click", function () {
  if (currentIndexSong === 0) return;
  currentIndexSong--;

  songInfo();
  spotifyActive();
  audio.play();

  playPauseBtn.style = "background-image: url(./assets/pauseBtn.svg);";
  spotifyBtn.style = "background-image: url(./assets/spotifyBtnActive.svg);";

  flag = true;
});

nextBtn.addEventListener("click", function () {
  if (currentIndexSong === songs.length - 1) return;
  currentIndexSong++;

  songInfo();
  spotifyActive();
  audio.play();

  playPauseBtn.style = "background-image: url(./assets/pauseBtn.svg);";
  spotifyBtn.style = "background-image: url(./assets/spotifyBtnActive.svg);";

  flag = true;
});
