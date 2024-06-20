import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChldBooksDshbrdComponent } from './chld-books-dshbrd.component';

describe('ChldBooksDshbrdComponent', () => {
  let component: ChldBooksDshbrdComponent;
  let fixture: ComponentFixture<ChldBooksDshbrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChldBooksDshbrdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChldBooksDshbrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
