import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// ключ для зберігання локального сховища
const KEY_VIDEO = 'videoplayer-current-time';

const videoPlayer = document.querySelector('#vimeo-player');

// ініціалізуємо бібліотеку
const player = new Player(videoPlayer);

// зберігаємо час в локальне сховище
const timeUpdate = throttle(sec => {
  localStorage.setItem(KEY_VIDEO, sec);
}, 1000);

const onPlay = function (data) {
  timeUpdate(data.seconds);
};

player.on('timeupdate', onPlay);

const currentTime = localStorage.getItem(KEY_VIDEO);
if (currentTime) {
  player.setCurrentTime(currentTime);
}
