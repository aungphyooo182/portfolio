import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { ImageComponent } from './image/image.component';
import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';

const components = [
  ImageComponent,
  TextComponent,
  ButtonComponent
]

@NgModule({
    declarations: components,
    exports: components,
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ]
})
export class GlobalComponentsModule {}
