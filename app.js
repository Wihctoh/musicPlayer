const audio = document.querySelector("audio");
const artist = document.querySelector(".songHeader__title");
const songName = document.querySelector(".songHeader__name");
const songCover = document.querySelector(".songImg");

const songs = [
  {
    id: 1,
    path: "./music/Bullet-for-my-Valentine_Tears-Dont-Fall.mp3",
    artist: "Bullet for my Valentine",
    songName: "Tears Dont Fall",
    imgPath: "background-image: url(./assets/bfmvCover.jpg)",
  },
  {
    id: 2,
    path: "./music/Bring-Me-The-Horizon_Parasite-Eve.mp3",
    artist: "Bring Me The Horizon",
    songName: "Parasite Eve",
    imgPath: "background-image: url(./assets/bmthCover.jpg)",
  },
  {
    id: 3,
    path: "./music/System-of-a-Down_Chop-Suey!.mp3",
    artist: "System of a Down",
    songName: "Chop Suey!",
    imgPath: "background-image: url(./assets/soadCover.jpg)",
  },
];

let flag = false;
let currentIndexSong = 0;

document
  .querySelector(".songControll__playPauseBtn")
  .addEventListener("click", function () {
    audio.src = songs[currentIndexSong].path;
    artist.innerHTML = songs[currentIndexSong].artist;
    songName.innerHTML = songs[currentIndexSong].songName;
    songCover.style = songs[currentIndexSong].imgPath;

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

document
  .querySelector(".songControll__prevBtn")
  .addEventListener("click", function () {
    if (currentIndexSong === 0) return;
    currentIndexSong--;
    artist.innerHTML = songs[currentIndexSong].artist;
    songName.innerHTML = songs[currentIndexSong].songName;
    songCover.style = songs[currentIndexSong].imgPath;
    audio.src = songs[currentIndexSong].path;
    audio.play();
    document.querySelector(".songControll__playPauseBtn").style =
      "background-image: url(./assets/pauseBtn.svg);";
    flag = true;
  });

document
  .querySelector(".songControll__nextBtn")
  .addEventListener("click", function () {
    if (currentIndexSong === songs.length - 1) return;

    currentIndexSong++;
    artist.innerHTML = songs[currentIndexSong].artist;
    songName.innerHTML = songs[currentIndexSong].songName;
    songCover.style = songs[currentIndexSong].imgPath;
    audio.src = songs[currentIndexSong].path;
    audio.play();
    document.querySelector(".songControll__playPauseBtn").style =
      "background-image: url(./assets/pauseBtn.svg);";
    flag = true;
  });
