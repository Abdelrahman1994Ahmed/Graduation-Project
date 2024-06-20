import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Book1ListienDshbrdComponent } from './book1-listien-dshbrd.component';

describe('Book1ListienDshbrdComponent', () => {
  let component: Book1ListienDshbrdComponent;
  let fixture: ComponentFixture<Book1ListienDshbrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Book1ListienDshbrdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Book1ListienDshbrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
