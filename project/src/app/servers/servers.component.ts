import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    //selector: '[app-servers]',
    // selector: '.app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowServer: boolean = false;
    serverCreated: string = "No server has been created ";
    serverName:string=""
    constructor() {
        setTimeout(() => {
            this.allowServer = true;

        }, 3000)


    }
    ngOnInit() {
    }
    onCreateServer(value) {
        console.log(value);
        this.serverCreated = "A new server has been created ";
    }
    onInputSername(event: any) {
       this.serverName=(<HTMLInputElement>event.target).value;
    }

}
