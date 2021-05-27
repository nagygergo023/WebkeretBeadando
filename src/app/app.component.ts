import { Component } from '@angular/core';
import { TitleService } from './routing/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'device';
  constructor(private titleService: TitleService) {
    this.titleService.refreshTitle();
  }
}
