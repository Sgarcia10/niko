import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  height;
  constructor(ngZone:NgZone) {
    window.onresize = (e) =>
    {
        ngZone.run(() => {
            this.height = window.innerHeight;
        });
    };
  }

  ngOnInit() {
    this.height = window.innerHeight;
  }

}
