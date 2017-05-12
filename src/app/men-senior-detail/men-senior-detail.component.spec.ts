import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenSeniorDetailComponent } from './men-senior-detail.component';

describe('MenSeniorDetailComponent', () => {
  let component: MenSeniorDetailComponent;
  let fixture: ComponentFixture<MenSeniorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenSeniorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenSeniorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
