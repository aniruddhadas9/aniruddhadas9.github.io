import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceWebsitesComponent } from './reference-websites.component';

describe('ReferenceWebsitesComponent', () => {
  let component: ReferenceWebsitesComponent;
  let fixture: ComponentFixture<ReferenceWebsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceWebsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
