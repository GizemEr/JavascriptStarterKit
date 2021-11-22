import User from "./user.js"

export default class Customer extends UserS{
    constructor(id, firstName, lastName, city,age, creditCardNumber) {
        super(id, firstName,lastName,city,age)
        this.creditCardNumber = creditCardNumber
    }
}