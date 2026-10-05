let currentMusic = null;

const playMusic = (theme) => {
  const audio = {
    alliance: "../../assets/music/Stormwind.mp3",
    horde: "../../assets/music/Orgrimmar.mp3",
  };
  if (currentMusic) {
    currentMusic.pause();
    currentMusic.currentTime = 0;
  }

  currentMusic = new Audio(audio[theme]);
  currentMusic.loop = true;
  currentMusic.volume = 0.4;

  function playAudio() {
    currentMusic.play();
  }

  return playAudio;
};

export default playMusic;
