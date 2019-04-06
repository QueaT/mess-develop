import {Component, DoCheck, ElementRef, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ChatHandlerService} from '../page-elm/services/chat-handler.service';
import {delay, repeat} from 'rxjs/operators';
import {InternalViewRef} from '@angular/core/src/linker/view_ref';

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
    checkEngine: any;
    friendName: string;
    sendMessToBase: { name: string, mess: string, reciver: string };
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
        this.getMessenges();
        /**
         *  Otrzymywanie danych po klikniecu w znajomego tj. mess,id
         */
        this.getDataFromDb();

    }

    ngOnDestroy(): void {
        clearInterval(this.checkEngine);
    }

    getDataFromDb() {
        this.Mess.hint$.subscribe((input) => {
            this.roomKey = input.key;
            this.roomMess[0].messenges = [];
            if (input.msg !== undefined) {
                input.msg.forEach((elm) => {
                    if (elm.sender !== this.serviceInfo['user_data'].username && elm.message !== '') {
                        this.roomMess[0].messenges.push({
                            input: elm.message
                        });
                    } else if (elm.sender !== this.friendName && elm.message !== '') {
                        this.roomMess[0].messenges.push({
                            output: elm.message
                        });
                    }
                });
            }
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.roomMess[0].messenges = [];
        this.friendName = changes.userInfo.currentValue.name;
        this.roomMess[0].username = this.friendName;
        this.roomMess = [{
            username: '',
            messenges: [{input: ''}, {output: ''}]
        }];
    }

    displayMess() {
        this.output = true;
        this.sendMessToBase = {
            name: this.serviceInfo['user_data'].username,
            mess: this.logedInput,
            reciver: this.friendName,
        };
        console.log(this.sendMessToBase);
        this.Mess.outputChat(this.sendMessToBase);
        if (this.logedInput !== '') {
            this.roomMess[0].messenges.push({
                output: this.logedInput
            });
        }
        this.logedInput = '';
    }

    getMessenges() {
        this.checkEngine = setInterval(() => {
            this.friendMess = {
                key: this.userInfo.key,
                friend: this.friendName
            };
            console.log(this.friendMess);
            this.Mess.inputChat(this.friendMess);
        }, 2000);

    }

}
