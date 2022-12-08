const today = new Date()
const daysOfWeek = ['Domingo','Lunes', 'Martes', 'Miércoles','Jueves','Viernes','Sábado']
const monthsOfYear = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
let body = document.querySelector('body')
let day = document.getElementById('day')
let sunOrMoon = document.querySelector('i')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let amPm = document.getElementById('am-pm')

const clock = () => {
  const todayTime = new Date()

  day.innerHTML = `${daysOfWeek[today.getDay()]} ${today.getDate()} de ${monthsOfYear[today.getMonth()]} del ${today.getFullYear()}`

  if (todayTime.getHours() >= 6 && todayTime.getHours() <= 19) {
    body.setAttribute('class','day')
    sunOrMoon.setAttribute('class','bi bi-sun')
  } else {
    body.setAttribute('class','night')
    sunOrMoon.setAttribute('class','bi bi-moon-stars-fill')
  }

  if (todayTime.getHours() > 12) {
    hours.innerHTML = todayTime.getHours()-12
    amPm.innerHTML = 'pm'
  } else {
    hours.innerHTML = todayTime.getHours()
    amPm.innerHTML = 'am'
  }

  if (todayTime.getMinutes() < 10) {
    minutes.innerHTML = `0${todayTime.getMinutes()}`
  } else {
    minutes.innerHTML = todayTime.getMinutes()
  }
  
  if (todayTime.getSeconds() < 10) {
    seconds.innerHTML = `0${todayTime.getSeconds()}`
  } else {
    seconds.innerHTML = todayTime.getSeconds()
  }
}

setInterval(clock, 1000)