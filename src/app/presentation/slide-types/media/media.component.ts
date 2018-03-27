import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  @Input() slide;
  imgLink: string;

  constructor() { }

  ngOnInit() {
    const media = this.slide.media;
    this.imgLink = `https://cdn.snap.menu/version/${media.token}.${this.getExt(media.mime)}`;
  }

  getExt(mime) {
    const supportedMimes = {
      'image/png': 'png',
      'image/jpg': 'jpg'
    };
    return supportedMimes[mime];
  }

}
