import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFeedMainHomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: AngularFeedMainHomeComponent;
  let fixture: ComponentFixture<AngularFeedMainHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularFeedMainHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFeedMainHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
