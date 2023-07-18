import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SassoCartaForbiceComponent } from './sasso-carta-forbice.component';

describe('SassoCartaForbiceComponent', () => {
  let component: SassoCartaForbiceComponent;
  let fixture: ComponentFixture<SassoCartaForbiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SassoCartaForbiceComponent]
    });
    fixture = TestBed.createComponent(SassoCartaForbiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
