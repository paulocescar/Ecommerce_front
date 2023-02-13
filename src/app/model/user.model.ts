import { Injectable } from "@angular/core";

@Injectable()
export class User {
    public name: string = "";
    public email: string = "";
}

export class UserLogin {
    public email: string = "";
    public password: string = "";
}