let prompt = require('prompt-sync')()
const fs = require('fs')

const persons = {
    name: '',
    birthdate: '',
    phonenumber: '',
    email: '',
};

console.log(" 1 - Додати користувача")
console.log(" 2 - Прочитати файл")
console.log(" 3 - Робота з даними")

const choos = prompt("")
switch(choos){
    case "1":
        enterperson()
        break
    case "2":
        readfile()
        break
    case "3":
        newinfo()
    break       
}

function readfile(){
    const fs = require('fs')
    let data = JSON.parse(fs.readFileSync('persons.txt', 'utf8'))
    console.log(data)
}

function enterperson(){
    const userInputName = prompt("Уведіть ваше ім'я: ")
    const userInputEmail = prompt("Уведіть вашу електронну пошту: ")
    const userInputNumber = prompt("Уведіть ваш номер: ")
    const userInputBirth = prompt("Уведіть ваш день народження: ")

    persons.name = userInputName
    persons.email = userInputEmail
    persons.birthdate = userInputBirth
    persons.phonenumber = userInputNumber

    fs.writeFileSync('persons.txt', JSON.stringify(persons, null, 2))
    console.log('Інформацію збережено')
    console.log(persons)
}

function newinfo(){

    let userInputName = prompt("Уведіть ваше ім'я: ")
    let userInputEmail = prompt("Уведіть вашу електронну пошту: ")
    let userInputPhoneNumber = prompt("Уведіть ваш номер: ")
    let userInputBirthdate = prompt("Уведіть ваш день народження: ")

    persons.name = userInputName
    persons.email = userInputEmail
    persons.phonenumber = userInputPhoneNumber
    persons.birthdate = userInputBirthdate

    console.log(persons);

    let chooseAct;

    console.log("Виберіть, що хочете зробити:")
    console.log("1 - Змінити")
    console.log("2 - Видалити")
    console.log("3 - Додати")
    chooseAct = prompt("")

    if (chooseAct === '1') {
        const newPropertyName = prompt("Введіть назву властивості, яку хочете змінити: ");
        if (persons.hasOwnProperty(newPropertyName)) {
            switch (newPropertyName) {
                case "birthdate":
                    persons.birthdate = prompt("Введіть нову дату народження: ")
                    break;
                case "phonenumber":
                    persons.phonenumber = prompt("Введіть новий номер телефону: ")
                    break;
                case "email":
                    persons.email = prompt("Введіть нову електронну пошту: ")
                    break;
            }
            fs.writeFileSync('persons.txt', JSON.stringify(persons, null, 2))
            
        } else {
            console.log(`Властивість ${propToChange} не існує.`)
        }
    } else if (chooseAct === '2') {
        const propToDelete = prompt("Введіть назву властивості, яку хочете видалити: ")
        if (persons.hasOwnProperty(propToDelete)) {
            delete persons[propToDelete]
            console.log(`Властивість ${propToDelete} успішно видалена.`)
        } else {
            console.log(`Властивість ${propToDelete} не існує.`)
        }
        fs.writeFileSync('persons.txt', JSON.stringify(persons, null, 2))
    } else if (chooseAct === '3') {
        const newPropertyName = prompt("Введіть назву нової властивості: ")
        const newValue = prompt(`Введіть значення для нової властивості ${newPropertyName}: `)
        persons[newPropertyName] = newValue
        console.log(`Властивість ${newPropertyName} успішно додана.`)
        fs.writeFileSync('persons.txt', JSON.stringify(persons, null, 2))
    }
}