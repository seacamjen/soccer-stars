import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenSeniorComponent } from './men-senior.component';

describe('MenSeniorComponent', () => {
  let component: MenSeniorComponent;
  let fixture: ComponentFixture<MenSeniorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenSeniorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenSeniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
