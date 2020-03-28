import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialisingComponent } from './socialising.component';

describe('SocialisingComponent', () => {
  let component: SocialisingComponent;
  let fixture: ComponentFixture<SocialisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
