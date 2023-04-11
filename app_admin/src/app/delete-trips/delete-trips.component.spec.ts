import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTripsComponent } from './delete-trips.component';

describe('DeleteTripsComponent', () => {
  let component: DeleteTripsComponent;
  let fixture: ComponentFixture<DeleteTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
