export function convertNumberToMinute(myHour: number): number {
    let minutes = 0;
  
    if (Number(myHour)) {
      minutes = Math.floor(Number(myHour) * 60);
      return minutes;
    } else {
      return 0;
    }
  }
  
  export function convertStringToMinute(myHour: string): number {
    let time = 0;
    let hours = 0;
    let minutes = 0;
  
    if (String(myHour)) {
      time = myHour.split(":");
  
      if (Number(time[0])) {
        hours = Number(time[0]) * 60;
      } else {
        hours = Number(0);
      }
  
      if (Number(time[1])) {
        minutes = Number(time[1]);
      } else {
        minutes = Number(0);
      }
  
      return Math.floor(hours + minutes);
    } else {
      return 0;
    }
  }
  
  export function convertMinuteToString(myHour: number): string {
    let hours = 0;
    let minutes = 0;
    if (Number(myHour)) {
      hours = Math.floor(myHour / 60);
      minutes = myHour % 60;
      hours = ("0" + hours).slice(-2);
      minutes = ("0" + minutes).slice(-2);
      return `${hours}:${minutes}`;
    } else {
      return `00:00`;
    }
  }