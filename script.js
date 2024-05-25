function showClock() {
  let nowTime = new Date();
  let nowHour = nowTime.getHours();
  let nowMin  = nowTime.getMinutes();
  let nowSec  = nowTime.getSeconds();
  let time = nowHour + ":" + nowMin;
  let sec = "(" + nowSec + ")"
  document.getElementById("time").innerHTML = time;
  document.getElementById("timesec").innerHTML = sec;
}
setInterval('showClock()',1000);
