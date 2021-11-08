export default class UserService {//export dışarıdan import edilebileceği anlamına geliyor, default dosya bazlı olduğu için userService'ı import ettiğimde default olarak UserService'i import et demek
    constructor(loggerService) {
        this.users = []
        this.loggerService =loggerService
    }

    add(user) {
        this.users.push(user)
        this.loggerService.log(user)
    }

    list() {
        return this.users
    }

    getById(id) {
        return this.users.find(u => u.id === id)
    }

}