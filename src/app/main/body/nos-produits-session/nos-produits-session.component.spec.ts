import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosProduitsSessionComponent } from './nos-produits-session.component';

describe('NosProduitsSessionComponent', () => {
  let component: NosProduitsSessionComponent;
  let fixture: ComponentFixture<NosProduitsSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NosProduitsSessionComponent]
    });
    fixture = TestBed.createComponent(NosProduitsSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
