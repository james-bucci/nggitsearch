import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GithubService {
    private username: string;

    constructor(private _http : Http) {
        console.log('Github service ready...');
        this.username = 'james-bucci';
    }

    getUser() {
        return this._http.get('https://api.github.com/users/' + this.username)
            .map((res:Response) => res.json())
            .do(data => console.log(data) )
            .catch((err, caught) => this._handleHttpError(err, caught));
    }
    
    getRepos() {
        return this._http.get('https://api.github.com/users/' + this.username + '/repos')
            .map((res:Response) => res.json())
            .do(data => console.log(data) )
            .catch((err, caught) => this._handleHttpError(err, caught));
    }

    resetUser(user : string) {
        this.username = user;
    }
    _handleHttpError(err:any, caught:any) {
        console.log('Error Caught ' + err);
        return Observable.throw(err)
    }
}