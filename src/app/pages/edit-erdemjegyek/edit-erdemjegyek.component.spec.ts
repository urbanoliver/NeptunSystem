import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditErdemjegyekComponent } from './edit-erdemjegyek.component';

describe('EditErdemjegyekComponent', () => {
  let component: EditErdemjegyekComponent;
  let fixture: ComponentFixture<EditErdemjegyekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditErdemjegyekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditErdemjegyekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
