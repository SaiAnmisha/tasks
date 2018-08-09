import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task6parentComponent } from './task6parent.component';

describe('Task6parentComponent', () => {
  let component: Task6parentComponent;
  let fixture: ComponentFixture<Task6parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task6parentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
