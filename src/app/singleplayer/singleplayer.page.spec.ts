import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleplayerPage } from './singleplayer.page';

describe('SingleplayerPage', () => {
  let component: SingleplayerPage;
  let fixture: ComponentFixture<SingleplayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleplayerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleplayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
