import dateToLong from './dateToLong'

export default events => {
  let availableDates = events.map(event => dateToLong(event.sendAt))
  let uniqueDates = availableDates.filter(
    (date, index) => availableDates.indexOf(date) == index
  )

  return uniqueDates.map(date => {
    return {
      date,
      data: events.filter(event => dateToLong(event.sendAt) === date)
    }
  })
}
