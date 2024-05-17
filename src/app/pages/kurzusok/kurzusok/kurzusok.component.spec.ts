import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurzusokComponent } from './kurzusok.component';

describe('KurzusokComponent', () => {
  let component: KurzusokComponent;
  let fixture: ComponentFixture<KurzusokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KurzusokComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KurzusokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
