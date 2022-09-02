const D = require('../src/index')

const aDayInAugust = new D('August/7/2022 11:52:30')
const aDayInSeptember = new D('September/23/2022 07:08:03')

const bday = new D(`May/27/2002`)

test('should be birthyear', () => {
  expect(bday.year).toBe(2002)
})

test('should be birthyear short', () => {
  expect(bday.yr).toBe('02')
})

test('should be the month of august', () => {
  expect(aDayInAugust.month).toBe('August')
})

test('should be the month of august short', () => {
  expect(aDayInAugust.mon).toBe('Aug')
})

test('should be the day of the month i was born', () => {
  expect(bday.date).toBe(27)
})

test('should be the day of the week i was born', () => {
  expect(bday.day).toBe('Monday')
})

test('should be the day of the week i was born short', () => {
  expect(bday.dy).toBe('Mon')
})

test('should be the hours of a day in august', () => {
  expect(aDayInAugust.hours).toBe(11)
})

test('should be the minutes of a day in august', () => {
  expect(aDayInAugust.mins).toBe(52)
})

test('should be the seconds of a day in august', () => {
  expect(aDayInAugust.secs).toBe(30)
})

test('should be my bday formatted', () => {
  expect(bday.formatDate('M D, Y')).toBe('May 27, 2002')
})

test('should be a day in august formatted', () => {
  expect(aDayInAugust.formatDate('m d y | H:I:S')).toBe('Aug 07 22 | 11:52:30')
})

test('should be a day in september formatted ', () => {
  expect(aDayInSeptember.formatDate('M D Y | h:i:s')).toBe('September 23 2022 | 7:8:3')
})