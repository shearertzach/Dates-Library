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

  formatDate(format) {
    if (typeof (format) != "string") return
    const formats = format.split('')
    let formattedDate = ""

    for (let i = 0; i < formats.length; i++) {
      switch (formats[i]) {
        case "Y":
          formattedDate = formattedDate + this.year
          break
        case "y":
          formattedDate = formattedDate + this.yr
          break
        case "M":
          formattedDate = formattedDate + this.month
          break
        case "m":
          formattedDate = formattedDate + this.mon
          break
        case "D":
          formattedDate = formattedDate + this.date
          break
        case "d":
          const date = this.date.toString()
          if (date.length > 1) formattedDate = formattedDate + date
          else formattedDate = formattedDate + `0${date}`
          break
        case "H":
          const hrs = (this.hours % 12).toString()
          if (hrs.length > 1) formattedDate = formattedDate + hrs
          else formattedDate = formattedDate + `0${hrs}`
          break
        case "h":
          formattedDate = formattedDate + this.hours
          break
        case "I":
          const mins = this.mins.toString()
          if (mins.length > 1) formattedDate = formattedDate + mins
          else formattedDate = formattedDate + `0${mins}`
          break
        case "i":
          formattedDate = formattedDate + this.mins
          break
        case "S":
          const secs = this.secs.toString()
          console.log(secs.length)
          if (secs.length > 1) formattedDate = formattedDate + secs
          else formattedDate = formattedDate + `0${secs}`
          break
        case "s":
          formattedDate = formattedDate + this.secs
          break
        default:
          formattedDate = formattedDate + formats[i]
          break
      }
    }
    return formattedDate
  }

  when() {
    const now = new Date()

    if (this._date > now) {
      const y = this._date.getFullYear() - now.getFullYear()
      const m = this._date.getMonth() - now.getMonth()
      const d = this._date.getDate() - now.getDate()

      if (y > 0) {
        return `${y} year(s) from now`
      } else if (m > 0) {
        return `${m} month(s) from now`
      } else {
        return `${d} day(s) from now`
      }
    } else if (this._date < now) {
      const y = now.getFullYear() - this._date.getFullYear()
      const m = now.getMonth() - this._date.getMonth()
      const d = now.getDate() - this._date.getDate()

      if (y > 0) {
        return `${y} year(s) ago`
      } else if (m > 0) {
        return `${m} month(s) ago`
      } else {
        return `${d} day(s) ago`
      }
    } else {
      return 'Today'
    }

  }
}