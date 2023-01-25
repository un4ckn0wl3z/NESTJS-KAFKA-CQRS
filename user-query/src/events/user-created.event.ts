export class UserCreatedEvent {
    constructor(
        public readonly firstname: string,
        public readonly lastname: string,
        public readonly email: string,
        public readonly password: string,
    ){
    }

    toString(){
        return JSON.stringify({
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
        })   
    }
}