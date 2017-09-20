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
    serverName: string = "My test";
    bookName: string = "Enter name";
    allowbookName: boolean = true;
    serverCreation = false;
    servers = ['serverone', 'servertwo'];

    constructor() {
        setTimeout(() => {
            this.allowServer = true;

        }, 3000)


    }
    ngOnInit() {
    }
    onCreateServer(value) {
        console.log(value);
        this.servers.push(this.serverName);
        this.serverCreation = true;
        this.serverCreated = "A new server has been created:  " + this.serverName;
    }
    onInputSername(event: any) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }
    onResetString() {
        this.bookName = "";
        if (this.bookName == null) {
            this.allowbookName = false;

        }
        else {
            this.allowbookName = true;
        }

    }

}
