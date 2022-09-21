const months: string[] = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

class D {
  _date: Date;

  constructor(...args: [string]) {
    this._date = new Date(...args);
  }

  get year(): number {
    return this._date.getFullYear();
  }
  get yr(): string {
    return this._date.getFullYear().toString().slice(2, 4);
  }
  get month(): string {
    return months[this._date.getMonth()];
  }
  get mon(): string {
    return months[this._date.getMonth()].slice(0, 3);
  }
  get day(): string {
    return weekdays[this._date.getDay()];
  }
  get dy(): string {
    return weekdays[this._date.getDay()].slice(0, 3);
  }
  get date(): number {
    return this._date.getDate();
  }
  get hours(): number {
    return this._date.getHours();
  }
  get mins(): number {
    return this._date.getMinutes();
  }
  get secs(): number {
    return this._date.getSeconds();
  }

  /**
   * This function formats the date with a given strings.
   * @param {String} "M/D/Y H:I"
   * @returns {String} "May 27, 2002"
   */
  formatDate(format: string): string {
    if (typeof format != "string") return "Invalid format";
    const formats = format.split("");
    let formattedDate = "";

    for (let i = 0; i < formats.length; i++) {
      switch (formats[i]) {
        case "Y":
          formattedDate = formattedDate + this.year;
          break;
        case "y":
          formattedDate = formattedDate + this.yr;
          break;
        case "M":
          formattedDate = formattedDate + this.month;
          break;
        case "m":
          formattedDate = formattedDate + this.mon;
          break;
        case "D":
          formattedDate = formattedDate + this.date;
          break;
        case "d":
          const date = this.date.toString();
          if (date.length > 1) formattedDate = formattedDate + date;
          else formattedDate = formattedDate + `0${date}`;
          break;
        case "H":
          const hrs = (this.hours % 12).toString();
          if (hrs.length > 1) formattedDate = formattedDate + hrs;
          else formattedDate = formattedDate + `0${hrs}`;
          break;
        case "h":
          formattedDate = formattedDate + this.hours;
          break;
        case "I":
          const mins = this.mins.toString();
          if (mins.length > 1) formattedDate = formattedDate + mins;
          else formattedDate = formattedDate + `0${mins}`;
          break;
        case "i":
          formattedDate = formattedDate + this.mins;
          break;
        case "S":
          const secs = this.secs.toString();
          if (secs.length > 1) formattedDate = formattedDate + secs;
          else formattedDate = formattedDate + `0${secs}`;
          break;
        case "s":
          formattedDate = formattedDate + this.secs;
          break;
        default:
          formattedDate = formattedDate + formats[i];
          break;
      }
    }
    return formattedDate;
  }

  /**
   * This function gives you a rough estimate of when the date occurred.
   * @returns {String} "4 Year(s) from now"
   */
  when(): string {
    const now = new Date();

    if (this._date > now) {
      const y = this._date.getFullYear() - now.getFullYear();
      const m = this._date.getMonth() - now.getMonth();
      const d = this._date.getDate() - now.getDate();

      if (y > 0) {
        return `${y} year(s) from now`;
      } else if (m > 0) {
        return `${m} month(s) from now`;
      } else {
        return `${d} day(s) from now`;
      }
    } else if (this._date < now) {
      const y = now.getFullYear() - this._date.getFullYear();
      const m = now.getMonth() - this._date.getMonth();
      const d = now.getDate() - this._date.getDate();

      if (y > 0) {
        return `${y} year(s) ago`;
      } else if (m > 0) {
        return `${m} month(s) ago`;
      } else {
        return `${d} day(s) ago`;
      }
    } else {
      return "Today";
    }
  }
}

module.exports = D;
