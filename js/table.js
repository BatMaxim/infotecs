//Отображение тела таблицы
function renderTable(people, page){
    document.querySelector("tbody").innerHTML = "";
    const startEl = 10*(page - 1);
    const endEl = 10*(page);
    //Выборка элементов из массива (в зависимости от текущей страницы)
    people.slice(startEl, endEl).forEach(element=>{
        const person = {id: element.id, firstName: element.name.firstName, lastName: element.name.lastName,
            about: element.about, eyeColor: element.eyeColor};
        addLineInTable(person);
    })
}
//Отображение шапки страницы
function renderTableHeader(){
    document.querySelector("thead").innerHTML = `
        <tr>
            ${getHeadItem("firstName", "First name","имени")}
            ${getHeadItem("lastName", "Last name", "фамилии")}
            ${getHeadItem("about", "About", "описанию")}
            ${getHeadItem("eyeColor", "Eye color", "цвету глаз")}
        </tr>
`;
}
//Получение разметки элемента шапки таблицы
function getHeadItem(column, text, sortText){
    return `
         <th data-column="${column}" >
                <div class="table__head">
                     <div class="table__head-top">
                        <button title="Свернуть колонку" class="table__btn" data-column="${column}">
                            <i class="fas fa-minus"></i>
                        </button>
                     </div>
                     <div class="table__heading">
                        <div>
                           ${text}  
                        </div>
                        <div>
                            <i class="fas fa-sort-alpha-down sort-btn"  title="Сортировать по ${sortText}" data-name="${column}"></i>
                        </div>
                     </div>
                </div> 
            </th>
    `
}

//Получение разметки строки тела таблицы
function getLine(person) {
    return `
        <tr data-id="${person.id}" class="person-line">
            <td data-column="firstName"><span>${person.firstName}</span></td>
            <td data-column="lastName"><span>${person.lastName}</span></td>
            <td title="${person.about}" data-column="about"><span class="table__about">${person.about}</span></td>
            <td data-column="eyeColor">
                <div class="eyeColor"> 
                     <div class="eyeColor__color" style= "background-color: ${person.eyeColor}"></div>
                    <div>${person.eyeColor}</div>
                </div>     
            </td>
        </tr>
    `;
}

//Добавление строки в тело таблицы
function addLineInTable(person){
    document.querySelector("tbody").insertAdjacentHTML('beforeend', getLine(person));
}