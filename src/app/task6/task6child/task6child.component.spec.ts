import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task6childComponent } from './task6child.component';

describe('Task6childComponent', () => {
  let component: Task6childComponent;
  let fixture: ComponentFixture<Task6childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task6childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task6childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
