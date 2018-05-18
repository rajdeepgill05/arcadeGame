class CEO { 
    constructor(firstName, lastName) {
        this.salary = 450000
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = "Smith"
        this.age = 82
        this.previousPosition = "Administrative Assistant" 
        this.currentBankAccount = 100
    }
} 

CEO.prototype.makeMoney = function someFunction() {    
    this.currentBankAccount += 500;
}

CEO.prototype.addMoney: function(money) {
    this.currentBankAccount += money;
}

CEO.prototype.howRichAmI: function() {
    console.log("I'm very rich.")
    return this.currentBankAccount;
}

CEO.prototype.work = function(hours) {
    if(hours > 10)
        console.log("The CEO worked " + hours + " hours")
    else
        console.log("The CEO refused to work.")    
}

function CEODaughter(firstName, lastName, nickName) {
    CEO.call(this, firstName, lastName)
    this.nickName = nickName
}

CEODaughter.prototype = Object.create(CEO.prototype)
CEODaughter.prototype.constructor = CEODaughter

CEODaughter.prototype.spendMoney = function(howMuch) {
    console.log(this.firstName + " is spending the money.")
}

CEODaughter.prototype.work = function() {
    console.log(this.firstName + " tells her dad to work");
    CEO.prototype.work.call(this, 30)
}


const daughter = new CEODaughter("Missy", "McDonald")
daughter.work();