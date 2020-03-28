import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalKnowledgeComponent } from './local-knowledge.component';

describe('LocalKnowledgeComponent', () => {
  let component: LocalKnowledgeComponent;
  let fixture: ComponentFixture<LocalKnowledgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalKnowledgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
