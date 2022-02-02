//Сортировка данных по имени
function nameSortData(list) {
    return list.sort((el1, el2)=>{
        if(el1.name.firstName < el2.name.firstName) return -1;
        if (el1.name.firstName > el2.name.firstName) return 1;
        return 0;
    });
}
//Сортировка данных по фамилии
function lastNameSortData(list) {
    return list.sort((el1, el2)=>{
        if(el1.name.lastName < el2.name.lastName) return -1;
        if (el1.name.lastName > el2.name.lastName) return 1;
        return 0;
    });
}
//Сортировка данных по описанию
function aboutSortData(list) {
    return list.sort((el1, el2)=>{
        if(el1.about < el2.about) return -1;
        if (el1.about > el2.about) return 1;
        return 0;
    });
}
//Сортировка данных по цвету глаз
function eyeColorSortData(list) {
    return list.sort((el1, el2)=>{
        if(el1.eyeColor < el2.eyeColor) return -1;
        if (el1.eyeColor > el2.eyeColor) return 1;
        return 0;
    });
}
//Функция выбора сортировки
function sort(param, list){
    switch (param){
        case "firstName":
            return nameSortData(list);
        case "lastName":
            return lastNameSortData(list);
        case "about":
            return aboutSortData(list);
        case "eyeColor":
            return eyeColorSortData(list);
        default:
            return list;

    }
}