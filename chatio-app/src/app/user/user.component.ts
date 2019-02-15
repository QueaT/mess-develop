import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChatHandlerService} from '../page-elm/services/chat-handler.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnChanges {
    @Input() userInfo: { id: number, name: string, apiKey: any };
    logedInput: string;
    OutputMess = [{input: 'kuba'}, {output: ''}];
    output = false;
    friendName: string;

    constructor(private outputMess: ChatHandlerService) {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        this.friendName = changes.userInfo.currentValue.name;
        console.log(this.friendName);

    }

    displayMess() {
        this.output = true;
        this.OutputMess.push({
            output: this.logedInput
        });
        console.log(this.userInfo);
        this.outputMess.outputChat(this.logedInput);
    }

}
