/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrentLanguageService } from './current-language.service';

describe('Service: CurrentLanguage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentLanguageService]
    });
  });

  it('should ...', inject([CurrentLanguageService], (service: CurrentLanguageService) => {
    expect(service).toBeTruthy();
  }));
});
