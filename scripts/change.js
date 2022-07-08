document.querySelector('#flat').addEventListener('click', changeFlat)
document.querySelector('#mobile').addEventListener('click', changeMobile)
document.querySelector('#old').addEventListener('click', changeOld)


changeMobile()

function changeOld() {
    document.querySelector('.calc-body').classList.remove('calc-body_mobile')
    document.querySelector('.numpad-textarea').classList.remove('numpad-textarea_mobile')
    document.querySelector('.calc-container').classList.remove('calc-container_mobile')
    document.querySelector('.calc-body').classList.remove('calc-body_flat')
    document.querySelector('.calc-container').classList.remove('calc-container_flat')
    document.querySelector('.numpad-textarea').classList.remove('numpad-textarea_flat')
    
    const numbers = document.querySelectorAll('.number')
    for (const item of numbers) {
        item.style.backgroundColor = null
        item.style.color = null
        item.style.borderWidth = null
        item.style.borderRadius = '0%'
        item.style.height = '80px'
        item.style.width = '80px'
        item.style.margin = '0px'
    
    }
    
    const numberLast = document.querySelectorAll('.numberLast')
    for (const item of numberLast) {
      item.style.backgroundColor = null
    }
    const number1row = document.querySelectorAll('.number1row')
    for (const item of number1row) {
      item.style.backgroundColor = null
      item.style.color = null
    }
    
    document.querySelector('#zero-button').style.borderRadius = null
    document.querySelector('#total-button').style.borderRadius = null
    document.querySelector('#total-button').style.background = null
    document.querySelector('.calc-chelka').style.display = 'none'
    document.querySelector('.calc-chelka-niz').style.display = 'none'
    }
    


//flat style
function changeFlat() {
document.querySelector('.calc-body').classList.remove('calc-body_mobile')
document.querySelector('.numpad-textarea').classList.remove('numpad-textarea_mobile')
document.querySelector('.calc-container').classList.remove('calc-container_mobile')

document.querySelector('.calc-body').classList.add('calc-body_flat')
document.querySelector('.calc-container').classList.add('calc-container_flat')
document.querySelector('.numpad-textarea').classList.add('numpad-textarea_flat')

const numbers = document.querySelectorAll('.number')
for (const item of numbers) {
    // item.classList.remove('number_flat')

    item.style.backgroundColor = '#dbdbdb'
    item.style.color = '#000'
    item.style.borderWidth = '1px'
    item.style.borderRadius = '0%'
    item.style.height = '80px'
    item.style.width = '80px'
    item.style.margin = '0px'

}

const numberLast = document.querySelectorAll('.numberLast')
for (const item of numberLast) {
  item.style.backgroundColor = '#ea7f2f'
}
const number1row = document.querySelectorAll('.number1row')
for (const item of number1row) {
  item.style.backgroundColor = '#d0d0d0'
  item.style.color = '#000'
}

document.querySelector('#zero-button').style.borderRadius = '0 0 0 10px'
document.querySelector('#total-button').style.borderRadius = '0 0 10px 0'
document.querySelector('#total-button').style.background = 'rgb(234, 127, 47)'
document.querySelector('.calc-chelka').style.display = 'none'
document.querySelector('.calc-chelka-niz').style.display = 'none'
}



//mobile style
function changeMobile() {

    document.querySelector('.calc-body').classList.remove('calc-body_flat')
    document.querySelector('.calc-container').classList.remove('calc-container_flat')
    document.querySelector('.numpad-textarea').classList.remove('numpad-textarea_flat')

document.querySelector('.calc-container').classList.add('calc-container_mobile')
document.querySelector('.calc-body').classList.add('calc-body_mobile')
document.querySelector('.numpad-textarea').classList.add('numpad-textarea_mobile')
const numbers = document.querySelectorAll('.number')
for (const item of numbers) {
    item.classList.remove('number_flat')
  item.style.backgroundColor = '#965ef1'
  item.style.color = '#fff'
  item.style.borderWidth = '0px'
  item.style.borderRadius = '50%'
  item.style.height = '70px'
  item.style.width = '70px'
  item.style.margin = '5px'
    // item.classList.add('number_mobile')
}

const numberLast = document.querySelectorAll('.numberLast')
for (const item of numberLast) {
  item.style.color = '#8dd1f9'
}

document.querySelector('#total-button').style.borderRadius = '40px'
document.querySelector('#total-button').style.background = 'linear-gradient(180deg, #e85ff8, #f719c8)'
document.querySelector('.calc-chelka').style.display = 'block'
document.querySelector('.calc-chelka-niz').style.display = 'block'
}




//2222222222222

// mac os
