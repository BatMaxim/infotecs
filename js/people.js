const url = 'https://raw.githubusercontent.com/BatMaxim/infotecs/main/data/people.json';
//Загрузка данных из JSON с GitHub
async function readPeople() {
    const response = await fetch(url);
    let people = await response.json();
    return people;
}
