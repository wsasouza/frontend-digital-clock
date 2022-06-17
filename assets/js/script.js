setInterval(() => {
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');

  let hh = document.getElementById('hh');
  let mm = document.getElementById('mm');
  let ss = document.getElementById('ss');

  let hr_dot = document.querySelector('.hr_dot');
  let min_dot = document.querySelector('.min_dot');
  let sec_dot = document.querySelector('.sec_dot');

  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  let am = hour >= 12 ? 'PM' : 'AM';

  // convert 24h clock to 12h clock
  if (hour > 12) hour = hour - 12;

  // add zero before single digit number
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  hours.innerHTML = hour + '<br><span>Horas</span>';
  minutes.innerHTML = minute + '<br><span>Minutos</span>';
  seconds.innerHTML = second + '<br><span>Segundos</span>';
  ampm.innerHTML = am;

  hh.style.strokeDashoffset = 440 - (440 * hour) / 12;
  // 12h clock
  mm.style.strokeDashoffset = 440 - (440 * minute) / 60;
  // 60 minutes
  ss.style.strokeDashoffset = 440 - (440 * second) / 60;
  // 60 seconds

  hr_dot.style.transform = `rotate(${hour * 30}deg)`;
  // 360 / 12 = 30
  min_dot.style.transform = `rotate(${minute * 6}deg)`;
  // 360 / 60 = 6
  sec_dot.style.transform = `rotate(${second * 6}deg)`;
  // 360 / 60 = 6
});
