# Dates Library

This utility library makes it easy to work with dates.

<!-- > -->

## Installation

```bash
npm install @zach-shearer/dates-library
```

<!-- > -->

## Class Atributes

```JS
D.year // 2022
D.yr // 22
D.month // September
D.mon // Sep
D.day // Thursday
D.dy // Thu
D.date // 1
D.hours // 8
D.mins // 7
D.secs // 32
```

## Class Functionality


### format()
```JS
const d = new D('9/1/2022')

d.format('M D, Y') // September 1, 2022
d.format('m d, y') // Sep 01, 22
```

### when()
```JS
const middleOfSeptember = new D('9/15/2022')
const beginningOfJuly = new D('7/1/2022')

middleOfSeptember.when() // 14 day(s) from now
beginningOfJuly.when() // 2 month(s) ago
```


