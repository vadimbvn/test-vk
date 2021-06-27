'use strict';

const header = document.querySelector('header');
const section = document.querySelector('section');
section.className = 'checkin-form';

fetch('js/data.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        generateForm(data);
    });


function generateForm(data) {
    let form = document.createElement('form');
    form.className = 'form';
    form.action = data.form.url;
    form.method = 'POST';

    section.appendChild(form);


    createNAmeGroup(data, form);
    createInfo(data, form);

    let buttonForm = document.createElement('button');
    let myDiv = document.createElement('div');
    let myPara = document.createElement('p');

    buttonForm.className = 'form__button';
    myDiv.className = 'form__wrapper';
    myPara.className = 'form__description';
    buttonForm.textContent = data.button.text;
    buttonForm.type = data.button.type;
    myPara.textContent = data.button.description;

    myDiv.appendChild(buttonForm);
    myDiv.appendChild(myPara);
    form.appendChild(myDiv);
}

function createNAmeGroup(obj, form) {
    const nameGroup = obj['name-group'];
    const myList = document.createElement('ul');
    const fieldset = document.createElement('fieldset');

    fieldset.className = 'form__group';
    myList.className = 'form__list';


    for (let i = 0; i < nameGroup.length; i++) {
        const listItem = document.createElement('li');
        let newLabel = document.createElement('label');
        newLabel.className = 'form__label';

        newLabel.setAttribute('for', nameGroup[i].id);
        newLabel.textContent = nameGroup[i].label;

        let newInput = document.createElement('input');
        newInput.className = 'form__input';
        newInput.type = nameGroup[i].type;
        newInput.id = nameGroup[i].id;
        newInput.name = nameGroup[i].name;
        newInput.required = nameGroup[i].required;
        newInput.placeholder = nameGroup[i].placeholder;

        listItem.appendChild(newLabel);
        listItem.appendChild(newInput);
        myList.appendChild(listItem);
        fieldset.appendChild(myList);
    }

    form.appendChild(fieldset);

}

function createInfo(obj, form) {
    const infoGroup = obj['info'];
    const myList = document.createElement('ul');
    const fieldset = document.createElement('fieldset');

    fieldset.className = 'form__group';
    myList.className = 'form__list';


    for (let j = 0; j < infoGroup.length; j++) {
        const listItem = document.createElement('li');
        let newLabel = document.createElement('label');
        newLabel.className = 'form__label';

        newLabel.setAttribute('for', infoGroup[j].id);
        newLabel.textContent = infoGroup[j].label;

        let newInput = document.createElement('input');
        newInput.className = 'form__input';
        newInput.type = infoGroup[j].type;
        newInput.id = infoGroup[j].id;
        newInput.name = infoGroup[j].name;
        newInput.required = infoGroup[j].required;
        newInput.placeholder = infoGroup[j].placeholder;

        listItem.appendChild(newLabel);
        listItem.appendChild(newInput);
        myList.appendChild(listItem);
        fieldset.appendChild(myList);
    }

    form.appendChild(fieldset);

}