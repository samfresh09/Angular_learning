import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouscriptionSessionComponent } from './souscription-session.component';

describe('SouscriptionSessionComponent', () => {
  let component: SouscriptionSessionComponent;
  let fixture: ComponentFixture<SouscriptionSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SouscriptionSessionComponent]
    });
    fixture = TestBed.createComponent(SouscriptionSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
