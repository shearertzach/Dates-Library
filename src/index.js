const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

class D {
	constructor(...args) {
		this._date = new Date(...args)
	}

  get year() {
    return this._date.getFullYear()
  }
  get yr() {
    return this._date.getFullYear().toString().slice(2, 4)
  }
  get month() {
    return months[this._date.getMonth()]
  }
  get mon() {
    return months[this._date.getMonth()].slice(0, 3)
  }
  get day() {
    return weekdays[this._date.getDay()]
  }
  get dy() {
    return weekdays[this._date.getDay()].slice(0, 3)
  }
  get date() {
    return this._date.getDate()
  }
  get hours() {
    return this._date.getHours()
  }
  get mins() {
    return this._date.getMinutes()
  }
  get secs() {
    return this._date.getSeconds()
  }
}