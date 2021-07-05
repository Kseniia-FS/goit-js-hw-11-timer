import
CountdownTimer
from "./plagin.js";

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: "2022,07,17",
});


  timer.showTime();
