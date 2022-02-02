//Заполнение полей ввода в форме выбранными данными
function fillForm(person){
    document.getElementById('form-firstName').value = person.name.firstName;
    document.getElementById('form-lastName').value = person.name.lastName;
    document.getElementById('form-phone').value = person.phone;
    document.getElementById('form-about').value = person.about;
    document.getElementById('form-eyeColor').value = person.eyeColor;
}
