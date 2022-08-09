import vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new vimeo(iframe);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

onRestartPage();
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
}

function onRestartPage() {
  const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
