import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThePlayComponent } from './the-play.component';

describe('ThePlayComponent', () => {
  let component: ThePlayComponent;
  let fixture: ComponentFixture<ThePlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThePlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
