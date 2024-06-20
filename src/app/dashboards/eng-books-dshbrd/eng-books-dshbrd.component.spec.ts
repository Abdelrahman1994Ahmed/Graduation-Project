import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngBooksDshbrdComponent } from './eng-books-dshbrd.component';

describe('EngBooksDshbrdComponent', () => {
  let component: EngBooksDshbrdComponent;
  let fixture: ComponentFixture<EngBooksDshbrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngBooksDshbrdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EngBooksDshbrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
