let chronometer 
let pMinutes = document.getElementById('minutes')
let pSeconds = document.getElementById('seconds')
let pHundredths = document.getElementById('hundredths')
let button = document.getElementById('button')
let resetBtn = document.getElementById('reset')

pMinutes.innerHTML = '00'
pSeconds.innerHTML = '00'
pHundredths.innerHTML = '00'
let hundredths = parseInt(pHundredths.innerHTML)
let seconds = parseInt(pSeconds.innerHTML)
let minutes = parseInt(pMinutes.innerHTML)

const chrono = () => {
  hundredths++

  if (hundredths < 10) {
    pHundredths.innerHTML = `0${hundredths}`
  } else if (hundredths > 99) {
    pHundredths.innerHTML = '00'
    setSeconds()
  } else {
    pHundredths.innerHTML = hundredths
  }  
}

const setSeconds = () => {
  hundredths = 0
  seconds++

  if (seconds < 10) {
    pSeconds.innerHTML = `0${seconds}`
  } else if (seconds > 59) {
    pSeconds.innerHTML = '00'
    setMinutes()
  } else {
    pSeconds.innerHTML = seconds
  }
}

const setMinutes = () => {
  seconds = 0
  minutes++

  if (minutes < 10) {
    pMinutes.innerHTML = `0${minutes}`
  } else if (minutes > 60) {
    pause()
  } else {
    pMinutes.innerHTML = minutes
  }
}

const start = () => {
  chronometer = setInterval(chrono, 10)
  button.innerHTML = "Detener"
  button.setAttribute('onclick','pause()')
}

const pause = () => {
  clearInterval(chronometer)
  button.innerHTML = 'Continuar'
  button.setAttribute('onclick','start()')
  resetBtn.setAttribute('class','btn')
}

const reset = () => document.location.reload()