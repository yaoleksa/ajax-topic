document.querySelector('.time').innerText= new Date().toLocaleTimeString();

document.querySelector('.get').addEventListener('click', getData)

function getData(){
    const data=new XMLHttpRequest();
    data.onreadystatechange = function() {
        if(data.readyState === 4 && data.status === 200){
            document.querySelector('.conteiner').innerHTML = data.responseText;
        }
    }
    data.open('GET', 'data.txt', true);
    data.send();
}

document.querySelector('.fetch').addEventListener('click', getNewData)

async function getNewData() {
    /*fetch('data.html')
    .then(response => response.text())
    .then(html => document.querySelector('.new_container').innerHTML = html);*/
    const response = await fetch('data.html');
    document.querySelector('.new_container').innerHTML = await response.text();
}

document.querySelector('.get_json').addEventListener('click', getDataJson)

function getDataJson(){
    const data=new XMLHttpRequest();
    data.onreadystatechange = function() {
        if(data.readyState === 4 && data.status === 200){
            const newData = JSON.parse(data.responseText);
            document.querySelector('.client-name').innerHTML = newData.name;
            document.querySelector('.client-balance').innerHTML = newData.temp;
        }
    }
    data.open('GET', 'data.json', true);
    data.send();
}

document.querySelector('.get_json_fetch').addEventListener('click', getNewFetch)

async function getNewFetch() {
    const response = await fetch('data.json');
    const data = await response.json();
    document.querySelector('.fclient-name').innerHTML = data.name;
    document.querySelector('.fclient-balance').innerHTML = data.temp;
}

document.querySelector('.login-form input[type=submit]')
    .addEventListener('click', login);
function login(e) {
    e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            name: document.querySelector('.login-form input[name=name]').value,
            password: document.querySelector('.login-form input[name=password]').value
        })
    })
    .then(_ => document.querySelector('.login-form').reset());
}