import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
const wind = document.querySelector('#vimeo-player');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let timeSeonds = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
).seconds;

player.setCurrentTime(timeSeonds);

player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(data) {
  let time = JSON.stringify(data);
  localStorage.setItem('videoplayer-current-time', time);
  console.log('onplay');
}
console.log(player);

wind.addEventListener('timeupdate', () => console.log('hsjfd'));
