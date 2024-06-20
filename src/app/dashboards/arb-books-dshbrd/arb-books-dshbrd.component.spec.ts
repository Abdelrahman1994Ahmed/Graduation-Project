import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbBooksDshbrdComponent } from './arb-books-dshbrd.component';

describe('ArbBooksDshbrdComponent', () => {
  let component: ArbBooksDshbrdComponent;
  let fixture: ComponentFixture<ArbBooksDshbrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArbBooksDshbrdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArbBooksDshbrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
