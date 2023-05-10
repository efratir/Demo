import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestannaireComponent } from './questannaire.component';

describe('QuestannaireComponent', () => {
  let component: QuestannaireComponent;
  let fixture: ComponentFixture<QuestannaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestannaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestannaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
