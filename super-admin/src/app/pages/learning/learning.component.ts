import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  back() {
    // window.close();
    console.log('back click');
  }
}
