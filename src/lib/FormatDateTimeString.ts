export const formatDateTimeString = (utcDateString: string): string => {
  if (!utcDateString) return ''

  const utcDate = new Date(utcDateString)

  // Create a new Date object representing the UTC date and time
  const utcOffsetMinutes = utcDate.getTimezoneOffset()
  const istOffsetMinutes = utcOffsetMinutes + 330 // IST is UTC + 5:30 which is 330 minutes

  const istDate = new Date(utcDate.getTime() + istOffsetMinutes * 60 * 1000)

  const month = istDate.getMonth() + 1 // getMonth() is zero-based
  const year = istDate.getFullYear()
  const day = istDate.getDate()

  const hours = istDate.getHours()
  const minutes = istDate.getMinutes()
  const seconds = istDate.getSeconds()

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const monthName = monthNames[month - 1]

  const formattedDate = `${monthName} ${day}, ${year}`
  const formattedTime = `${String(hours).padStart(2, '0')}:${String(
    minutes
  ).padStart(2, '0')}:${String(seconds).padStart(2, '0')} IST`

  return `${formattedDate} ${formattedTime}`
}
