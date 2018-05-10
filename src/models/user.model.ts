export class User {
    public email: string;
    // public password: string;
    // public firstName: string;
    // public lastName: string;
    // public phone: number;
    // public address: string;
    // public zipCode: string;
    // public city: string;
    // public language: string;
    // public country: string;
    public id: string;
    public status: string;
    public username: string;
    public group: string;
    constructor(input){
        this.id= input.id;
        this.status= input.status;
        this.username= input.username;
        this.group= input.group;
        this.email= input.email;
    }
}