<<<<<<< HEAD
let url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Ошибка запроса");
        }
        return response.json();
    })
    .then(
        (data) => {
            console.log(data);
            document.getElementById("jsonDisplay").textContent = JSON.stringify(data, null, 2);

            const table = document.querySelector('table');

            const headers = table.querySelector('thead');
            const body = table.querySelector('tbody');

            let headers_arr = ["name", "email"];

            let th_headers = document.createElement('tr');

            headers_arr.forEach(element => {
                let new_header = document.createElement('th'); 
                new_header.textContent = element;
                th_headers.appendChild(new_header);
            });

            headers.appendChild(th_headers);
            
            for (const dict of data) {
                let row = document.createElement('tr')
                headers_arr.forEach(element => {
                    let td = document.createElement('td');
                    td.textContent = dict[element];
                    row.appendChild(td);
                })
                body.appendChild(row);
            }
        }
    )
    .catch((error) => {
        throw new Error(error);
    })
=======

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
>>>>>>> 474f0b6e761f7a7fd18485c7902636c1ab921098
