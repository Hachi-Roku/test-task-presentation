import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit {
  @Input() slide;

  constructor() { }

  ngOnInit() {
    this.slide.shownStyle = Object.assign(this.slide.style, this.slide.layout);
  }

}
