import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantEnteranceComponent } from './participant-enterance.component';

describe('ParticipantEnteranceComponent', () => {
  let component: ParticipantEnteranceComponent;
  let fixture: ComponentFixture<ParticipantEnteranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantEnteranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantEnteranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
