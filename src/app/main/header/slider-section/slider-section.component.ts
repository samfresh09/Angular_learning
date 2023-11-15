import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-section',
  templateUrl: './slider-section.component.html',
  styleUrls: ['./slider-section.component.css']
})
export class SliderSectionComponent {

  pathSite: string = "https://www.ipnetuniversity.com/";

  getPathSite(): string {
    return this.pathSite;
  }



}
