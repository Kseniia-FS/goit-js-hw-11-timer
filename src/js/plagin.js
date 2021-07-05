export default
class CountdownTimer {
  constructor({
    selector,
    targetDate
  }) {
    this.targetDate = new Date(targetDate);
    this.days = document.querySelector(`${selector} .value[data-value="days"]`);
    this.hours = document.querySelector(`${selector} .value[data-value="hours"]`);
    this.minutes = document.querySelector(`${selector} .value[data-value="mins"]`);
    this.seconds = document.querySelector(`${selector} .value[data-value="secs"]`);

  }
  
  pad(value) {
    return value < 10 ? `0${value}` : value;
  }

  countDowm() {
    const currentTime = new Date();
    this.createValueForSpan(currentTime);
  }

  showTime() {
    setInterval(() => this.countDowm(), 1000);
  }

  createValueForSpan(currentTime) {
    const time = this.targetDate - currentTime;
    this.days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    this.hours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    this.minutes.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    this.seconds.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));

  }
}