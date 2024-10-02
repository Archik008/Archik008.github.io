
let button = document.querySelector('.button button')

button.onclick = function () {
    let num1 = document.querySelector('.input1 input')
    let num2 = document.querySelector('.input2 input')
    
    num1 = Number(num1.value)
    num2 = Number(num2.value)

    if (num1 > num2) {
        alert(`Num1(${num1}) > Num2(${num2})`)
    }
    else if (num1 == num2) {
        alert(`Num1(${num1}) = Num2(${num2})`)
    }
    else{
        alert(`Num1(${num1}) < Num2(${num2})`)
    }
}

let var1 = null
let var2 = 23
let var3 = true

let buttonCompile = document.querySelector('.button-compile button')

buttonCompile.onclick = function () {
    document.querySelector('.result').innerHTML = `<span class="keyword">${typeof var1}</span><br>
    <span class="keyword">${typeof var2}</span> <br>
    <span class="keyword">${typeof var3}</span> <br>`
}

let buttonCompare = document.querySelector('.button-compare button')

buttonCompare.onclick = function () {
    let numCompare = document.querySelector('.input3 input').value
    if (numCompare % 2 == 0) {
        alert('Число четное')
    }
    else{
        alert('Число нечетное')
    }
}