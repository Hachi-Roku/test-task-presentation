import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit, OnDestroy {
  private delay: number;
  slidesData;
  slides;
  currentSlide;
  sliderInterval;

  constructor() { }

  ngOnInit() {
    this.slidesData = this.getSlides() || {};
    this.slides = this.slidesData.elements || [];
    this.updateSlidesLayout();
    // this.delay = this.slidesData.delay * 1000 || 5000;
    // devided delay by 10 for test purposes
    this.delay = this.slidesData.delay * 100 || 5000;
    this.initPresentation();
  }

  initPresentation() {
    const that = this;
    let index = 0;
    this.currentSlide = this.slides[index++];
    this.sliderInterval = setInterval(function() {
      if (index >= that.slides.length) {
        index = 0;
      }
      that.currentSlide = that.slides[index++];
    }, 7000);
  }

  updateSlidesLayout() {
    this.slides.forEach(slide => {
      for(let k in slide.layout) {
        slide.layout[k] += '%';
      }
      slide.layout.position = 'absolute';
    });
  }

  getSlides() {
    // static data
    return {
        "delay": 30,
        "animations": [

        ],
        "elements": [
          {
            "style": {
              "background-color": "#ace100",
              "color": "#000"
            },
            "href": {
            },
            "layout": {
              "bottom": 0,
              "right": 0,
              "top": 10,
              "left": 0
            },
            "type": "shape",
            "size": 0,
            "bindings": [

            ],
            "transitions": [

            ],
            "animations": [

            ],
            "position": 0,
            "token": "5ab8fd1e051faedf1c0af1ef"
          },
          {
            "name": "01-2017-porsche-911-turbo-s-fd-1.jpg",
            "media": {
              "token": "9cf02c20-6adf-4b2c-bd9f-0331f467341d",
              "mime": "image/png"
            },
            "style": {
              "background-color": null,
              "color": "#000"
            },
            "href": {
            },
            "layout": {
              "bottom": 39.074074074074076,
              "right": 25.937500000000007,
              "top": 7.4074074074074066,
              "left": 28.854166666666664
            },
            "type": "media",
            "size": 0,
            "bindings": [

            ],
            "transitions": [

            ],
            "animations": [

            ],
            "position": 0,
            "token": "5ab8fdd7051faedf1c0af1f0"
          },
          {
            "html": {
              "text": "<p style=\"text-align: center;\"><span style=\"color: #fb0f2e; font-size: 2em;\"><strong>Test campaign</strong></span></p>",
              "bindings": [

              ]
            },
            "style": {
              "background-color": null,
              "color": "#000"
            },
            "href": {
            },
            "layout": {
              "bottom": 2.962962962962962,
              "right": 25.83333333333332,
              "top": 63.70370370370371,
              "left": 28.958333333333336
            },
            "type": "text",
            "size": 0,
            "bindings": [

            ],
            "transitions": [

            ],
            "animations": [

            ],
            "position": 0,
            "token": "5ab8fdf0051faedf1c0af1f1"
          }
        ]
      };
  }

  ngOnDestroy() {
    clearInterval(this.sliderInterval);
  }
}
