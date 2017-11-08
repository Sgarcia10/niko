import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  height;
  constructor(ngZone: NgZone) {
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
