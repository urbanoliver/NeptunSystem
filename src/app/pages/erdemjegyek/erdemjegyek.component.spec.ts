import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErdemjegyekComponent } from './erdemjegyek.component';

describe('ErdemjegyekComponent', () => {
  let component: ErdemjegyekComponent;
  let fixture: ComponentFixture<ErdemjegyekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErdemjegyekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErdemjegyekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
