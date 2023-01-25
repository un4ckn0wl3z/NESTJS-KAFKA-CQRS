export class User {
    constructor(
        public readonly firstname: string,
        public readonly lastname: string,
        public readonly email: string,
        public readonly password: string,
    ){
    }
}