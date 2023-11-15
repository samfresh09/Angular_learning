import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproposSessionComponent } from './apropos-session.component';

describe('AproposSessionComponent', () => {
  let component: AproposSessionComponent;
  let fixture: ComponentFixture<AproposSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AproposSessionComponent]
    });
    fixture = TestBed.createComponent(AproposSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
