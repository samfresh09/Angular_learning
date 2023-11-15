import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauteSessionComponent } from './nouveaute-session.component';

describe('NouveauteSessionComponent', () => {
  let component: NouveauteSessionComponent;
  let fixture: ComponentFixture<NouveauteSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouveauteSessionComponent]
    });
    fixture = TestBed.createComponent(NouveauteSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
