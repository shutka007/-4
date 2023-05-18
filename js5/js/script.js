const result = document.querySelector('#resultFirstExecise')

const result2 = document.querySelector('#resultSecondExecise')

const result3 = document.querySelector('#resultThirdExecise')

const result4 = document.querySelector('#resultFourthExecise')

const result5 = document.querySelector('#resultFifthExecise')

const result6 = document.querySelector('#resultSixthExecise')

const result7 = document.querySelector('#resultSeventhExecise')

const result8 = document.querySelector('#resultEigthExecise')

const sb = document.querySelector('#w-select')

const etherium = {
    usd: 2811,
    rub: 200612,
    eur: 2666
}
function getRate() {
    const keys = Object.keys(etherium)
    return etherium[keys[sb.selectedIndex]]
}
result.textContent = getRate();
sb.addEventListener("change", (event) => {
    result.textContent = getRate();
});

function getValues(obj) {
    return Object.values(obj).toString().toUpperCase()
}
result2.textContent = getValues({lang: "JavaScript", course:"third"})

function getInfo(street, building, flat) {
    const address = {
        street,
        building,
        flat
    }
    return Object.keys(address)
}
result3.textContent = getInfo('Lenina',1,40);

function joinArrays(obj1,obj2) {
    const newobj= {...obj1,...obj2}
    return Object.keys(newobj)
}
result4.textContent = joinArrays({name:'lol'}, {count:10});

class User {
    constructor(name, email) {
        this.name = name
        this.email = email
        console.log(name +' '+ email)
    }
}
function createUser(_name,_email) {
    new User(_name,_email)
    return "done"
}
result5.textContent = createUser("kolya", "newemail@gmail.com")

class User1 {
    constructor(name, id, type) {
        this.name = name
        this.id = id
        this.type = type
        console.log(name +' '+ id + ' ' + type)
    }
    getId() {
        console.log('#' + this.id)
    }
    isAdmin() {
        if(this.type === "isAdmin") { console.log(true) }
        else {console.log(false)}
    }
}
const newUser = new User1('vov', 2, "isAdmin")
newUser.getId()
newUser.isAdmin()
result6.textContent = "done"

class AreaOfCircle {
    constructor(radius) {
        this._area = radius * radius * Math.PI
    }
    get area() {
        return this._area
    }
    set r(value) {
        this._radius = value
        this._area = this._radius * this._radius * Math.PI
    }
}

const circle = new AreaOfCircle(2)
console.log(circle.area)
circle.r=10;
console.log(circle.area)
result7.textContent = "done"

class Course {
    constructor(_grade) {
        this.grade = _grade
    }
    getGrade() {
        if(this.grade >= 4) {
            return true
        } 
        else {
            return false
        }
    }
    getCertificate(asd) {
        if(asd) {
            return "Выдать сертификат"
        }
        else {
            return "Курс не пройден"
        }
    }
}

const course = new Course(5)
console.log(course.getCertificate(course.getGrade()))

result8.textContent="done"
