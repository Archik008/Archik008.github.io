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