import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  language: string;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.language = 'en';
    this.translateService.setDefaultLang(this.language);
  }

  selectedLanguage(lang: string) {
    this.language = lang;
    this.translateService.setDefaultLang(this.language);
  }
  
}
