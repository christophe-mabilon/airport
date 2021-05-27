import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelteModalComponent } from './delte-modal.component';

describe('DelteModalComponent', () => {
  let component: DelteModalComponent;
  let fixture: ComponentFixture<DelteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
