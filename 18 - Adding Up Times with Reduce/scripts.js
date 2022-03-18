const times = document.querySelectorAll('.videos li');

const totalTime = [...times].reduce((time, currTime) => {
  const timeStamp = currTime.dataset.time.split(':');
  time += parseInt(timeStamp[0] * 60) + parseInt(timeStamp[1]);
  return time;
}, 0);

const time = new Date(totalTime * 60 * 1000);

const node = document.createTextNode(`Total Playlist Time: ${time.getUTCDate() - 1} Days ${time.getUTCHours()} Hours and ${time.getUTCMinutes()} Minutes`);

document.body.insertBefore(node, document.body.firstChild);
