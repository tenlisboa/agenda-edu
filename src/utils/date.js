'use strict;'
import moment from 'moment-timezone'
const momentTz = date => moment(date).tz('America/Sao_Paulo')

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

const monthsInitials = [
  'jan',
  'fer',
  'mar',
  'abr',
  'mai',
  'jun',
  'jul',
  'ago',
  'set',
  'out',
  'nov',
  'dez'
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

export const getHourAndMinutes = date => momentTz(date).format('HH:mm')

export const getMonth = (date, initial = false) =>
  initial
    ? monthsInitials[momentTz(date).month()]
    : months[momentTz(date).month()]

export const getWeekDay = date => weekDays[momentTz(date).day()]

export const getDay = date => momentTz(date).format('DD')

export const dateToLong = (date, withHour = false) => {
  const hour = getHourAndMinutes(date)
  const dayOfMonth = getDay(date)

  let dateFormated = `${getWeekDay(date)}, ${dayOfMonth} de ${getMonth(date)}`
  if (withHour) {
    return `${dateFormated} às ${hour}h`
  }

  return dateFormated
}
