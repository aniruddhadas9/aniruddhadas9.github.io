import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TechinicalSkillsComponent} from './techinical-skills.component';

describe('TechinicalSkillsComponent', () => {
  let component: TechinicalSkillsComponent;
  let fixture: ComponentFixture<TechinicalSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechinicalSkillsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechinicalSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
