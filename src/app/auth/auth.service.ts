import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData{
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService{
    constructor(private _http: HttpClient){}
    private API_KEY = 'AIzaSyAY1vPkyo13u6oiC8qlSpSu4Gp9K-47tnk';

    signUp(email: string, password: string){
        return this._http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`,
            {
                email: email,
                password: password,
                returnSecureToken: true
            });
    }

    login(email: string, password: string){
        return this._http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`,
            {
                email: email,
                password: password,
                returnSecureToken: true
            });
    }
}