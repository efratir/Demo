import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteranceAllComponent } from './enterance-all.component';

describe('EnteranceAllComponent', () => {
  let component: EnteranceAllComponent;
  let fixture: ComponentFixture<EnteranceAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnteranceAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteranceAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
