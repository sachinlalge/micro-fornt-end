import { Component } from '@angular/core';
import { EventsService } from './service/event-service/event-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  admin: boolean = false;
  title = 'super-admin';

  constructor(
    private events: EventsService,
  ) {
    this.events.subscribe('tabClick', (data: any) => {
      console.log('click');
    });
  }
}
