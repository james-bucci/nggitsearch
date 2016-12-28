import { Component, OnInit } from '@angular/core';

import { GithubService } from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
    user : any;

    constructor(private _githubService : GithubService) {

     }

    ngOnInit() { 
        this._githubService.getUser().subscribe(
            (user) => { this.user = user },
            (err) => { console.log(err) },
            () => console.log('Finished')
        )
    }
}

