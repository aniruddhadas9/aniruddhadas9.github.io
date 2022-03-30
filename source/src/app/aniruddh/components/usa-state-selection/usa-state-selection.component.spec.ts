import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaStateSelectionComponent } from './usa-state-selection.component';

describe('UsaStateSelectionComponent', () => {
  let component: UsaStateSelectionComponent;
  let fixture: ComponentFixture<UsaStateSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsaStateSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaStateSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
