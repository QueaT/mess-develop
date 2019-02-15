import {TestBed} from '@angular/core/testing';

import {ChatHandlerService} from './chat-handler.service';

describe('ChatHandlerService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ChatHandlerService = TestBed.get(ChatHandlerService);
        expect(service).toBeTruthy();
    });
});
