import { Component, OnInit } from '@angular/core';
import { EventsService } from '../service/event-service/event-service.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  constructor(
    private events: EventsService,
  ) { }

  ngOnInit(): void {
  }

  learnTab() {
    window.open('http://localhost:4200/learning', '_blank');
    this.events.publish('tabClick');
  }
}
