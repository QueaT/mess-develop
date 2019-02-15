import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChatHandlerService} from '../page-elm/services/chat-handler.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnChanges {
    @Input() userInfo: { id: number, name: string, apiKey: any };
    @Input() serviceInfo;
    logedInput: string;
    OutputMess = [{input: 'kuba'}, {output: ''}];
    output = false;
    friendName: string;
    sendMessToBase: { name: string, mess: string, reciver: string, roomKey: number };

    constructor(private outputMess: ChatHandlerService) {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.friendName = changes.userInfo.currentValue.name;
    }

    displayMess() {
        this.output = true;
        this.OutputMess.push({
            output: this.logedInput
        });
        console.log(this.userInfo);
        this.sendMessToBase = {
            name: this.serviceInfo['user_data'].username,
            mess: this.logedInput,
            reciver: this.friendName,
            roomKey: this.serviceInfo.msg['room_3'].key
        };

        this.outputMess.outputChat(this.sendMessToBase);
    }

}
