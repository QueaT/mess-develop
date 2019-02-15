import {Injectable} from '@angular/core';
import {element} from 'protractor';

@Injectable({
    providedIn: 'root'
})
export class ChatHandlerService {

    constructor() {
    }

    outputChat(ele: string) {
        console.log(ele);
    }
}
