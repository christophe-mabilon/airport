import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVolsComponent } from './details-vols.component';

describe('DetailsVolsComponent', () => {
  let component: DetailsVolsComponent;
  let fixture: ComponentFixture<DetailsVolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsVolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsVolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
