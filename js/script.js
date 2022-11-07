const eleData = document.querySelector('.container');



const objEmployeeOne = {
    pic: `<img src="img/angela-caroll-chief-editor.jpg">`,
    name: 'Angela Caroll',
    profession: 'Chief Editor'
}

for (let key in objEmployeeOne) {
    //console.log(`${key}: ${objEmployee[key]}`);
    eleData.innerHTML += `<div class="img">${objEmployeeOne[key]}</div>`;
    eleData.innerHTML += `<div class="h1">${objEmployeeOne[key]}</div>`;
}


const objEmployeeTwo = {
    pic: `<img src="img/wayne-barnett-founder-ceo.jpg">`,
    name: 'Wayne Barnett',
    profession: 'Founder & CEO',
}

for (let key in objEmployeeTwo) {
    //console.log(`${key}: ${objEmployee[key]}`);
    eleData.innerHTML += `<div class="card">${objEmployeeTwo[key]}</div>`;
}


const objEmployeeThree = {
    pic: `<img src="img/walter-gordon-office-manager.jpg">`,
    name: 'Walter Gordon',
    profession: 'Office Manager',
}

for (let key in objEmployeeThree) {
    //console.log(`${key}: ${objEmployee[key]}`);
    eleData.innerHTML += `<div class="card">${objEmployeeThree[key]}</div>`;
}


