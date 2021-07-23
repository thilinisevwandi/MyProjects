import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateEditorComponent } from './validate-editor.component';

describe('ValidateEditorComponent', () => {
  let component: ValidateEditorComponent;
  let fixture: ComponentFixture<ValidateEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
