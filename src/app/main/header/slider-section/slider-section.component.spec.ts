import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSectionComponent } from './slider-section.component';

describe('SliderSectionComponent', () => {
  let component: SliderSectionComponent;
  let fixture: ComponentFixture<SliderSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderSectionComponent]
    });
    fixture = TestBed.createComponent(SliderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
