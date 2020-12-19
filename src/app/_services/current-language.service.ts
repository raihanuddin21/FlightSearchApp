import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentLanguageService {
  public code: string;
  public languageChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  emitLanguageChangeEvent(lang: string) {
    this.languageChange.emit(lang);
  }
  
  getLanguageChangeEmitter() {
    return this.languageChange;
  }
}
