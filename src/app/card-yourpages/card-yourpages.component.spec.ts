import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardYourpagesComponent } from './card-yourpages.component';

describe('CardYourpagesComponent', () => {
  let component: CardYourpagesComponent;
  let fixture: ComponentFixture<CardYourpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardYourpagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardYourpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
