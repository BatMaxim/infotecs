//Объект формы для изменения записи
const ChangesForm = {
    id: "",
    firstName: "",
    lastName: "",
    phone: "",
    about: "",
    eyeColor: "",
    setItems(person){
        this.id = person.id;
        this.firstName = person.name.firstName;
        this.lastName = person.name.lastName;
        this.phone = person.phone;
        this.about = person.about;
        this.eyeColor = person.eyeColor;
    },
    setFirstName(newValue){
        this.firstName = newValue;
    },
    setLastName(newValue){
        this.lastName = newValue;
    },
    setPhone(newValue){
        this.phone = newValue;
    },
    setAbout(newValue){
        this.about = newValue;
    },
    setEyeColor(newValue){
        this.eyeColor = newValue;
    },
    getObj(){
        return {
            "id": this.id,
            "name": {
                "firstName": this.firstName,
                "lastName": this.lastName
            },
            "phone": this.phone,
            "about": this.about,
            "eyeColor": this.eyeColor
        }
    }
}
