'use strict;'
import moment from 'moment'

const months = [
  'janeiro',
  'fervereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro'
]
const weekDays = [
  'domingo',
  'segunda',
  'terça',
  'quarta',
  'quinta',
  'sexta',
  'sábado'
]

function getMonth(months, month) {
  return months[month]
}

function getWeekDay(weekDays, day) {
  return weekDays[day]
}

export default (date, withHour = false) => {
  const month = moment(date).month()
  const dayOfWeek = moment(date).day()
  const hour = moment(date).format('HH:mm')
  const dayOfMonth = moment(date).format('DD')

  let dateFormated = `${getWeekDay(
    weekDays,
    dayOfWeek
  )}, ${dayOfMonth} de ${getMonth(months, month)}`
  if (withHour) {
    return `${dateFormated} às ${hour}h`
  }

  return dateFormated
}
