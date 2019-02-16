import {Component, DoCheck, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ChatHandlerService} from '../page-elm/services/chat-handler.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnChanges, OnDestroy {
    @Input() userInfo: { id: number, name: string, apiKey: any };
    @Input() serviceInfo;
    logedInput: string;
    recivedInput: any;
    output = false;
    friendName: string;
    sendMessToBase: { name: string, mess: string, reciver: string, roomKey: number };
    roomMess = [{
        username: '',
        messenges: [{input: ''}, {output: ''}]
    }];

    constructor(private Mess: ChatHandlerService) {
    }

    ngOnInit() {
        this.recivedInput = this.Mess.inputChat();
        this.Mess.hint$.subscribe((input) => {
            this.roomMess[0].messenges.push({
                input: input
            });

        });
    }

    ngOnDestroy(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.roomMess[0].messenges = [];
        this.friendName = changes.userInfo.currentValue.name;
        this.roomMess[0].username = this.friendName;
        this.roomMess = [{
            username: '',
            messenges: [{input: 'kuba'}, {output: ''}]
        }];
        console.log(this.roomMess);
    }

    displayMess() {
        this.output = true;
        this.sendMessToBase = {
            name: this.serviceInfo['user_data'].username,
            mess: this.logedInput,
            reciver: this.friendName,
            roomKey: this.serviceInfo.msg['room_3'].key
        };
        this.Mess.outputChat(this.sendMessToBase);
        this.roomMess[0].messenges.push({
            output: this.logedInput
        });

    }

    onScroll(event) {
        console.log(event);
        console.log(pageYOffset);
        console.log(window.innerHeight);
    }

}
