import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HonorsAndAwardsComponent} from './honors-and-awards.component';

describe('HonorsAndAwardsComponent', () => {
  let component: HonorsAndAwardsComponent;
  let fixture: ComponentFixture<HonorsAndAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HonorsAndAwardsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HonorsAndAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
