import { Component, OnInit } from '@angular/core';

import { GithubService } from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
    user : any;
    repos : any[];
    username : string;

    constructor(private _githubService : GithubService) {}

    ngOnInit() {}

    findUser() {
        this._githubService.resetUser(this.username);
        
        this._githubService.getUser().subscribe(
            (user) => { this.user = user },
            (err) => { console.log(err) },
            () => console.log('Finished Loading Profile')
        );

        this._githubService.getRepos().subscribe(
            (repos) => { this.repos = repos },
            (err) => { console.log(err) },
            () => console.log('Finished Loading Repos')
        )
    }
}

