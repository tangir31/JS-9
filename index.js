function maxName(name1, name2, name3) {
    if (name1.length >= name2.length && name1.length >= name3.length) {
        console.log(name1)
    } else if (name2.length >= name1.length && name2.length >= name3.length) {
        console.log(name2);
    } else {
        console.log(name3)
    }
}
maxName('Alex', 'George', 'Michael');


function checkAge() {
    let age = prompt("Введите ваш возраст:");

    if (!isNaN(age) && age >= 18) {
        alert("Заходите");
    } else if (!isNaN(age) && age < 18 && age >= 0) {
        alert("Пошол вон");
    } else {
        alert("Долбаёб");
    }
}

checkAge();