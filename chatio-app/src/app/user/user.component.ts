import {Component, DoCheck, ElementRef, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ChatHandlerService} from '../page-elm/services/chat-handler.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnChanges, OnDestroy {
    @Input() userInfo: { id: number, name: string, key: any };
    @Input() serviceInfo;
    @ViewChild('chat') chat: ElementRef;
    logedInput: string;
    output = false;
    roomKey: any;
    friendName: string;
    sendMessToBase: { name: string, mess: string, reciver: string, roomKey: number };
    roomMess = [{
        username: '',
        messenges: [{input: ''}, {output: ''}]
    }];
    private friendMess: {
        key: any
        friend: string
    };


    constructor(private Mess: ChatHandlerService) {
    }

    ngOnInit() {
        /**
         *  Otrzymywanie danych po klikniecu w znajomego tj. mess,id
         */
        this.Mess.hint$.subscribe((input) => {
            console.log(input);
            this.roomKey = input.key;
            if (input.msg !== undefined) {
                this.roomMess[0].messenges.push({
                    input: input.msg[0].message
                });
            }
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
            messenges: [{input: ''}, {output: ''}]
        }];
        this.getMessenges();
    }

    displayMess() {
        this.output = true;
        this.sendMessToBase = {
            name: this.serviceInfo['user_data'].username,
            mess: this.logedInput,
            reciver: this.friendName,
            roomKey: this.roomKey
        };
        console.log(this.sendMessToBase);
        this.Mess.outputChat(this.sendMessToBase);
        this.roomMess[0].messenges.push({
            output: this.logedInput
        });

    }

    onScroll(event) {
        console.log(event);
        console.log(pageYOffset);
        console.log(this.chat.nativeElement.innerHeight);
    }

    getMessenges() {
        this.friendMess = {
            key: this.userInfo.key,
            friend: this.friendName
        };
        this.Mess.inputChat(this.friendMess);
    }
}
