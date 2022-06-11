console.log("Hiiii");
let [hr, min, sec, ms] = [0, 0, 0, 0];
let time = document.querySelector(".mainTime");
let t = null;
function display() {
  ms += 10;

  if (ms == 1000) {
    ms = 0;
    sec++;

    if (sec == 60) {
      sec = 0;
      min++;

      if (min == 60) {
        min = 0;
        hr++;
      }
    }
  }
  let h = hr < 10 ? "0" + hr : hr;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;
  let ms1 = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;
  time.innerHTML = `${h}:${m}:${s}:${ms1}`;
  // console.log(`${m} : ${s} : ${ms1}`);
}

document.querySelector(".start").addEventListener("click", function () {
  if (t !== null) {
    clearInterval(t);
  }
  t = setInterval(display, 1);
});
document.querySelector(".stop").addEventListener("click", () => {
  clearInterval(t);
  document.querySelector("body").style.background = "skyblue";
  document.querySelector(".data").style.background = "skyblue";
});
document.querySelector(".reset").addEventListener("click", function () {
  clearInterval(t);
  [min, sec, ms] = [0, 0, 0];
  time.innerHTML = `00:00:00`;
  document.querySelector("body").style.background = "rgb(97, 97, 11)";
  document.querySelector(".data").style.background = "rgb(97, 97, 11)";
});
