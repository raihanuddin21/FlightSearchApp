import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CurrentLanguageService } from '../_services/current-language.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  language: string;

  constructor(public translateService: TranslateService, private currentLanguageService: CurrentLanguageService) { }

  ngOnInit() {
    this.selectedLanguage('en');
  }

  selectedLanguage(lang: string) {    
    this.language = lang;
    this.currentLanguageService.code = this.language;
    this.currentLanguageService.emitLanguageChangeEvent(this.language);
    this.translateService.setDefaultLang(this.language);
  }
  
}
