import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentationComponent } from './presentation.component';
import { ShapeComponent } from './slide-types/shape/shape.component';
import { TextComponent } from './slide-types/text/text.component';
import { MediaComponent } from './slide-types/media/media.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PresentationComponent,
    ShapeComponent,
    TextComponent,
    MediaComponent
  ],
  exports: [
    PresentationComponent
  ]
})
export class PresentationModule { }
