import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallgatoComponent } from './hallgato.component';

describe('HallgatoComponent', () => {
  let component: HallgatoComponent;
  let fixture: ComponentFixture<HallgatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HallgatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HallgatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
