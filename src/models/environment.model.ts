import { Inject } from "@angular/core";

export class Environment {

    public url: string;
    constructor(input){
        this.url = input.environment;
    }

    getEnvi(){
        return this.url;
    }
}