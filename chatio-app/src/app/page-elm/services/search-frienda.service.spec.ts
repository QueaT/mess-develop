import {TestBed} from '@angular/core/testing';

import {SearchFriendaService} from './search-frienda.service';

describe('SearchFriendaService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: SearchFriendaService = TestBed.get(SearchFriendaService);
        expect(service).toBeTruthy();
    });
});
