import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WHTComponent } from './wht.component';

describe('WHTComponent', () => {
  let component: WHTComponent;
  let fixture: ComponentFixture<WHTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WHTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WHTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
