function showClock() {
  let nowTime = new Date();
  let nowHour = nowTime.getHours();
  let nowMin  = nowTime.getMinutes();
  let nowSec  = nowTime.getSeconds();
  let time = nowHour + ":" + nowMin;
  let timesec = "(" + nowSec + ")"
  document.getElementById("time").innerHTML = time;
  document.getElementById("sec").innerHTML = timesec;
}
setInterval('showClock()',1000);
