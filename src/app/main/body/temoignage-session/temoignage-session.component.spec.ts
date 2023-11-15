import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoignageSessionComponent } from './temoignage-session.component';

describe('TemoignageSessionComponent', () => {
  let component: TemoignageSessionComponent;
  let fixture: ComponentFixture<TemoignageSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemoignageSessionComponent]
    });
    fixture = TestBed.createComponent(TemoignageSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
