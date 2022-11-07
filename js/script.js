const eleData = document.querySelector('.card');



const objEmployeeOne = {
    pic: `<img src="img/angela-caroll-chief-editor.jpg">`,
    name: 'Angela Caroll',
    profession: 'Chief Editor'
}

for (let key in objEmployeeOne) {
    //console.log(`${key}: ${objEmployee[key]}`);
    eleData.innerHTML += `<div class="card">${objEmployeeOne[key]}</div>`;
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


const arrEmployees = [
    {
        name: 'Wayne Barnett',
        profession: 'Founder & CEO',
        pic: 'img/wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        profession: 'Chief Editor',
        pic: 'img/angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        profession: 'Office Manager',
        pic: 'img/walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        profession: 'Social Media Manager',
        pic: 'img/angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        profession: 'Developer',
        pic: 'img/scott-estrada-developer.jpg'
    },

    {
        name: 'Narbara Ramos',
        profession: 'Graphic Designer',
        pic: 'img/barbara-ramos-graphic-designer.jpg'
    }
]