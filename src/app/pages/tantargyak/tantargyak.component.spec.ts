import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TantargyakComponent } from './tantargyak.component';

describe('TantargyakComponent', () => {
  let component: TantargyakComponent;
  let fixture: ComponentFixture<TantargyakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TantargyakComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TantargyakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
