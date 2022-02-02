let hiddenColumns = new Set(); // Множество скрытых элементов
let people = []; // Загруженные данные
let currentSort = ""; // Текущаяя сортировка

//Загрузка данных, подсчет страниц и создание таблицы
readPeople().then(data => {
    people = data;
    Pagination.setMax(Math.ceil(people.length/10))
    redrawTable()
});

//Отображение скрытых колонок, при нажатии на кнопку "Показать скрытые колонки"
document.getElementById("btn-show-col").addEventListener("click", ()=>{
    hiddenColumns.clear();
    redrawTable();
})

//Переключение страниц при нажатии на кнопки пагинации
document.querySelectorAll(".pagination__btn").forEach(
    element=>{
        element.addEventListener("click",()=>{
            if(element.dataset.type == "minus") Pagination.previousPage();
            if(element.dataset.type == "plus") Pagination.nextPage();
            document.querySelector(".pagination__input").value = Pagination.page;
            redrawTable()
        })
    });

//Переключение страниц при изменении данных в поле ввода пагинации
document.querySelector(".pagination__input").addEventListener("change", el=>{
    Pagination.setPage(el.target.value);
    document.querySelector(".pagination__input").value = Pagination.page;
    redrawTable()
});

//Сохранение изменений, которые были внесены пользователем в форму
document.querySelector(".form").addEventListener("submit", event=>{
    event.preventDefault();
    people[people.findIndex(person=>person.id ==ChangesForm.id)] = ChangesForm.getObj();
    hideEls(".form");
    people = sort(currentSort, people);
    redrawTable();
});

//Сохранение изменений в объекте при изменении данных в полях ввода

document.getElementById('form-firstName').addEventListener("change", event=>{
    ChangesForm.setFirstName(event.target.value);
});
document.getElementById('form-lastName').addEventListener("change", event=>{
    ChangesForm.setLastName(event.target.value);
});
document.getElementById('form-about').addEventListener("change", event=>{
    ChangesForm.setAbout(event.target.value);
});
document.getElementById('form-phone').addEventListener("change", event=>{
    ChangesForm.setPhone(event.target.value);
});
document.getElementById('form-eyeColor').addEventListener("change", event=>{
    ChangesForm.setEyeColor(event.target.value);
});
//------------------------------------------------
//Отрисовка страницы
function redrawTable(){
    renderTableHeader(); // Отрисовка шапки таблицы
    if(currentSort)
        document.querySelector(`[data-name="${currentSort}"]`).classList.add("sorted");
    //Вывоз функции сортировки при нажатии кнопок сортировки в шапке
    document.querySelectorAll('.sort-btn').forEach(
        element=>{
            element.addEventListener("click",()=>{
                people = sort(element.dataset.name, people);
                currentSort = element.dataset.name;
                redrawTable()
            })
        });
    // Скрытие колонок при нажатии на кнопки скрытия в шапке
    document.querySelectorAll('.table__btn').forEach(
        element=>{
            element.addEventListener("click",()=>{
                hiddenColumns.add(element.dataset.column);
                redrawTable();
            })
        });
    //Отрисовка тела таблицы
    renderTable(people, Pagination.page);
    //Отображение данных в форме для изменения, вызываеться при нажатии на строку в таблице
    document.querySelectorAll(".person-line").forEach(
        element => {
            element.addEventListener("click", ()=>{
                ChangesForm.setItems(people.find(person=>person.id == element.dataset.id));
                showEls(".form");
                fillForm(ChangesForm.getObj());
            })
        }
    )
    //Скрытие колонок, которые выбрал пользователь
    hiddenColumns.forEach(
        column=>{
            hideEls(`[data-column = '${column}']`);
        }
    )
}


// Скрытие элемента
function showEls(selector){
    document.querySelectorAll(selector).forEach(
        el=>{
            el.classList.remove("disp-none");
        }
    )
}
// Показ скрытого элемента
function hideEls(selector){
    document.querySelectorAll(selector).forEach(
        el=>{
            el.classList.add("disp-none");
        }
    )
}