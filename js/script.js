const eleData = document.querySelector('.container');

const employees = [
    {
        pic: `img/wayne-barnett-founder-ceo.jpg`,
        name: 'Wayne Barnett',
        profession: 'Founder & CEO'
    },

    {
        pic: `img/angela-caroll-chief-editor.jpg`,
        name: 'Angela Caroll',
        profession: 'Chief Editor'
    },

    {
        pic: `img/walter-gordon-office-manager.jpg`,
        name: 'Walter Gordon',
        profession: 'Office Manager',
    },

    {
        pic: `img/angela-lopez-social-media-manager.jpg`,
        name: 'Angela Lopez',
        profession: 'Social Media Manager',
    },

    {
        pic: 'img/scott-estrada-developer.jpg',
        name: 'Scott Estrada',
        profession: 'Developer',
    },

    {
        pic: 'img/barbara-ramos-graphic-designer.jpg',
        name: 'Barbara Ramos',
        profession: 'Graphic Designer',
    }
]
for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    employee["name"]; // employee.name
    eleData.innerHTML += 
        `<div class="card">
            <img class="pic" src="${employee.pic}">
            <div class="h4">${employee.name}</div>
            <div class="p">${employee.profession}</div>
        </div>`;
};